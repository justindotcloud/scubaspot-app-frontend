import { type Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import Script from 'next/script'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://scubaspot.co'),
  title: {
    template: '%s - Scubaspot',
    default: 'Scubaspot - Dive log app with a social feed',
  },
  description:
    'Scubaspot is a dive log app with a social feed. Log dives, share photos and videos, track certifications and gear, and discover dive sites worldwide.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Scubaspot',
    title: 'Scubaspot - Dive log app with a social feed',
    description:
      'Log dives, share photos and videos, track certifications and gear, and discover dive sites worldwide.',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Scubaspot — Dive log app with a social feed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scubaspot - Dive log app with a social feed',
    description:
      'Log dives, share photos and videos, track certifications and gear, and discover dive sites worldwide.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`bg-gray-50 antialiased ${inter.variable} ${outfit.variable}`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H129J3BMQ7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H129J3BMQ7');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
