import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'News and updates from Scubaspot — the dive log app with a social feed.',
  alternates: {
    canonical: '/blog',
  },
}

const posts = [
  {
    slug: 'v1-0-ready-coming-soon',
    title: 'Scubaspot v1.0 is ready 🎉',
    excerpt:
      'We’re thrilled to announce Scubaspot v1.0 is ready to ship. Your new favorite dive log app with a social feed is almost here — built for logging dives, sharing media, tracking certifications and gear, and discovering dive sites.',
    dateTime: '2025-12-23T10:00:00Z',
  },
] as const

export default function BlogPage() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">
            Blog
          </h1>
          <p className="mt-4 text-gray-600">
            Updates, release notes, and stories from the team.
          </p>

          <div className="mt-10 space-y-6">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h2 className="text-xl font-semibold tracking-tight text-gray-900">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <time
                  dateTime={post.dateTime}
                  className="mt-2 block text-sm text-gray-500"
                >
                  {new Date(post.dateTime).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </time>

                <p className="mt-3 text-gray-600">{post.excerpt}</p>

                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-semibold text-gray-900 underline underline-offset-4"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}


