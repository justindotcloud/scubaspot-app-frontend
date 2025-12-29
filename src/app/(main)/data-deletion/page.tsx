import { type Metadata } from 'next'
import Link from 'next/link'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'User Data Deletion',
  description:
    'Instructions for deleting your Scubaspot account and associated data.',
  alternates: {
    canonical: '/data-deletion',
  },
}

export default function DataDeletionPage() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">
            User data deletion
          </h1>
          <p className="mt-4 text-gray-700">
            You can delete your Scubaspot account directly in the app.
          </p>

          <div className="mt-10 space-y-6 text-gray-700">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Delete your account in the app
              </h2>
              <ol className="mt-3 list-inside list-decimal space-y-2">
                <li>Open Scubaspot</li>
                <li>Go to <strong>More</strong></li>
                <li>Open <strong>Your Account</strong></li>
                <li>Select <strong>Delete account</strong> and confirm</li>
              </ol>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                What happens to your data?
              </h2>
              <p className="mt-3">
                We value your privacy. When you delete your account, your account
                and data are deleted instantly with no grace period.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Need help?
              </h2>
              <p className="mt-3">
                If you're unable to access the app and need assistance,{' '}
                <a href="/contact" className="text-gray-900 underline">
                  reach out to us
                </a>
                .
              </p>
              <p className="mt-3 text-sm text-gray-500">
                You can also visit our{' '}
                <Link href="/?section=faqs" scroll={false} className="underline">
                  FAQs
                </Link>{' '}
                for common questions.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


