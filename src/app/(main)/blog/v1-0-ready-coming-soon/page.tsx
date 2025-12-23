import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

const title = 'Scubaspot v1.0 is ready 🎉'
const description =
  'Scubaspot v1.0 is ready to be released. A dive log app with a social feed: log dives, share photos and videos, track certifications and gear, and discover dive sites.'
const canonical = '/blog/v1-0-ready-coming-soon'
const publishedTime = '2025-12-23T10:00:00Z'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: {
    type: 'article',
    title,
    description,
    url: canonical,
    publishedTime,
  },
}

export default function BlogPostV1() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: publishedTime,
    dateModified: publishedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://scubaspot.co${canonical}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Scubaspot',
      url: 'https://scubaspot.co/',
    },
  }

  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            <span aria-hidden="true">←</span>
            Back to Blog
          </Link>

          <p className="text-sm text-gray-500">
            <time dateTime={publishedTime}>
              {new Date(publishedTime).toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </time>
          </p>

          <h1 className="mt-3 text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h1>

          <div className="mt-10 space-y-6 text-gray-700">
            <p>
              We’ve been quietly building something we wish existed from day one:
              a modern <strong>dive log app</strong> that doesn’t just store your
              dives — it helps you share them. Today we’re excited to announce
              that <strong>Scubaspot v1.0 is ready</strong> and will be available
              in the <strong>Apple App Store</strong> and the{' '}
              <strong>Google Play Store</strong> soon. 🎉
            </p>

            <p>
              Scubaspot is where your underwater story lives. Log your dives
              with the details that matter, then post your adventures to a
              beautiful feed so friends (and fellow divers you haven’t met yet)
              can follow along. Expect a social experience built for divers —
              not a generic timeline. 🤿
            </p>

            <p>
              Want to make your dives stand out? Add photos and videos to bring
              the moments back to life — the epic descent, that perfect buddy
              shot, the surprise turtle encounter. Then jump into the comments
              to swap tips, ask questions, and connect with the community. 📸🎬💬
            </p>

            <p>
              And it’s not just social. Scubaspot helps you stay organized with
              your diving journey: track your certifications, keep your gear in
              one place, and discover dive sites worldwide. If you can’t find a
              spot, you can add it so other divers can benefit too. 🌍✅
            </p>

            <p>
              If you’ve ever wanted a dive log that feels alive — a place to
              capture progress, relive adventures, and inspire your next trip —
              you’re going to love Scubaspot. Stay tuned… we’re almost ready to
              splash. 🫧
            </p>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </div>
      </Container>
    </section>
  )
}


