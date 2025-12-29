'use client'

import { useState, useEffect, useRef } from 'react'
import { Container } from '@/components/Container'

const MAX_MESSAGE_LENGTH = 5000
const RATE_LIMIT_MAX_SUBMISSIONS = 3 // Maximum submissions allowed
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hour window
const RATE_LIMIT_STORAGE_KEY = 'contact_form_submissions'

export function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
  })
  const [errors, setErrors] = useState<{
    email?: string
    message?: string
    form?: string
  }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Bot protection state
  const [honeypot, setHoneypot] = useState('') // Honeypot field - should remain empty
  const formLoadTime = useRef<number>(Date.now()) // Track when form was loaded

  // Reset form load time when component mounts
  useEffect(() => {
    formLoadTime.current = Date.now()
  }, [])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Check rate limiting using localStorage
  const checkRateLimit = (): boolean => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_STORAGE_KEY)
      if (!stored) return true

      const submissions: number[] = JSON.parse(stored)
      const now = Date.now()

      // Filter submissions within the time window
      const recentSubmissions = submissions.filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
      )

      return recentSubmissions.length < RATE_LIMIT_MAX_SUBMISSIONS
    } catch {
      return true // Allow submission if localStorage fails
    }
  }

  // Record a submission for rate limiting
  const recordSubmission = () => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_STORAGE_KEY)
      const submissions: number[] = stored ? JSON.parse(stored) : []
      const now = Date.now()

      // Filter old submissions and add the new one
      const recentSubmissions = submissions.filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
      )
      recentSubmissions.push(now)

      localStorage.setItem(
        RATE_LIMIT_STORAGE_KEY,
        JSON.stringify(recentSubmissions)
      )
    } catch {
      // Silently fail if localStorage is unavailable
    }
  }

  const validateForm = () => {
    const newErrors: typeof errors = {}

    // Rate limiting check (client-side)
    if (!checkRateLimit()) {
      newErrors.form =
        'Too many messages sent recently. Please try again later.'
      setErrors(newErrors)
      return false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must be ${MAX_MESSAGE_LENGTH} characters or less`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          message: formData.message,
          website: honeypot, // Honeypot field for server-side validation
          timestamp: formLoadTime.current.toString(), // Time-based validation
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Record this submission for rate limiting
      recordSubmission()
      setIsSubmitted(true)
    } catch (error) {
      setErrors({
        form:
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-20 sm:py-32">
        <Container>
          <div className="mx-auto max-w-lg text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-medium tracking-tight text-gray-900">
              Thank you!
            </h1>
            <p className="mt-4 text-base text-gray-600">
              Your message has been sent successfully. We&apos;ll get back to
              you as soon as possible.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({ email: '', name: '', message: '' })
                setHoneypot('')
                formLoadTime.current = Date.now() // Reset time tracking
              }}
              className="mt-8 text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              ← Send another message
            </button>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-lg">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">
            Contact us
          </h1>
          <p className="mt-4 text-base text-gray-600">
            Have a question, feedback, or just want to say hi? We&apos;d love to
            hear from you.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* Honeypot field - invisible to users, catches bots */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">
                Leave this field empty
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            {/* Form-level error (e.g., rate limiting) */}
            {errors.form && (
              <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
                {errors.form}
              </div>
            )}

            {/* Email field (required) */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-2 block w-full rounded-lg border px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300'
                }`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Name field (optional) */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                Name <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Your name"
              />
            </div>

            {/* Message field (required, max 5000 chars) */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-900"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                maxLength={MAX_MESSAGE_LENGTH}
                className={`mt-2 block w-full resize-none rounded-lg border px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                  errors.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300'
                }`}
                placeholder="How can we help?"
              />
              <div className="mt-2 flex items-center justify-between">
                {errors.message ? (
                  <p className="text-sm text-red-600">{errors.message}</p>
                ) : (
                  <span />
                )}
                <p className="text-sm text-gray-400">
                  {formData.message.length.toLocaleString()} /{' '}
                  {MAX_MESSAGE_LENGTH.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-gray-900 px-4 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}

