import { NextRequest, NextResponse } from 'next/server'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

const ses = new SESClient({ region: 'eu-west-1' })

const MAX_MESSAGE_LENGTH = 5000
const RECIPIENT_EMAIL = 'support@scubaspot.co'
const SENDER_EMAIL = 'noreply@scubaspot.co'

// Simple email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Sanitize user input to prevent email header injection
function sanitize(input: string): string {
  return input.replace(/[\r\n]/g, ' ').trim()
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, message, website, timestamp } = body

    // Honeypot check - if 'website' field is filled, it's a bot
    if (website) {
      // Return fake success to not tip off bots
      return NextResponse.json({ success: true })
    }

    // Time-based validation - form submitted too quickly (less than 3 seconds)
    const formLoadTime = timestamp ? parseInt(timestamp, 10) : 0
    const timeSinceLoad = Date.now() - formLoadTime
    if (timeSinceLoad < 3000) {
      // Return fake success to not tip off bots
      return NextResponse.json({ success: true })
    }

    // Validate required fields
    if (!email || typeof email !== 'string' || !email.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      )
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          success: false,
          error: `Message must be ${MAX_MESSAGE_LENGTH} characters or less`,
        },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedEmail = sanitize(email)
    const sanitizedName = name ? sanitize(name) : 'Not provided'
    const sanitizedMessage = message.trim()

    // Build email content
    const subject = `Contact Form: ${sanitizedName !== 'Not provided' ? sanitizedName : sanitizedEmail}`
    const textBody = `New contact form submission:\n\nFrom: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`
    const htmlBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${sanitizedName}</p>
      <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
      <hr />
      <h3>Message:</h3>
      <p>${sanitizedMessage.replace(/\n/g, '<br />')}</p>
    `

    // Send email via SES
    const command = new SendEmailCommand({
      Source: SENDER_EMAIL,
      Destination: {
        ToAddresses: [RECIPIENT_EMAIL],
      },
      ReplyToAddresses: [sanitizedEmail],
      Message: {
        Subject: {
          Data: subject,
          Charset: 'UTF-8',
        },
        Body: {
          Text: {
            Data: textBody,
            Charset: 'UTF-8',
          },
          Html: {
            Data: htmlBody,
            Charset: 'UTF-8',
          },
        },
      },
    })

    await ses.send(command)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Failed to send contact form email:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

