'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export function ScrollToSection() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const section = searchParams.get('section')
    if (!section) return

    const el = document.getElementById(section)
    if (!el) return

    // Wait for layout to stabilize (images, fonts, etc.), then scroll.
    const scrollToElement = () => {
      const elementTop = el.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: elementTop,
        behavior: 'smooth',
      })
    }

    // Use a small delay to ensure layout is ready
    setTimeout(scrollToElement, 150)
  }, [searchParams])

  return null
}


