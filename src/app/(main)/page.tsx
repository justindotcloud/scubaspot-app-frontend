import { type Metadata } from 'next'
import { Suspense } from 'react'

import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { ScrollToSection } from '@/components/ScrollToSection'

export const metadata: Metadata = {
  title: 'Dive log app',
  description:
    'Scubaspot is a dive log app with a social feed. Log dives, share photos and videos, track certifications and gear, and discover dive sites worldwide.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'Scubaspot',
        url: 'https://scubaspot.co/',
      },
      {
        '@type': 'Organization',
        name: 'Scubaspot',
        url: 'https://scubaspot.co/',
        logo: 'https://scubaspot.co/icon.png',
      },
      {
        '@type': 'MobileApplication',
        name: 'Scubaspot',
        applicationCategory: 'SportsApplication',
        operatingSystem: 'iOS, Android',
        url: 'https://scubaspot.co/',
        description:
          'A dive log app with a social feed. Log dives, share photos and videos, track certifications and gear, and discover dive sites worldwide.',
        image: 'https://scubaspot.co/icon.png',
        screenshot: 'https://scubaspot.co/icon.png',
      },
    ],
  }

  return (
    <>
      <Suspense fallback={null}>
        <ScrollToSection />
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <PrimaryFeatures />
      <Faqs />
    </>
  )
}
