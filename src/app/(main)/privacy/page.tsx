import { type Metadata } from 'next'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function Privacy() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </p>

          <div className="mt-12 space-y-10 text-base text-gray-700">
            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                1. Information We Collect
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <strong>Account Information:</strong> Name, email address, and
                  profile photo when you create an account.
                </p>
                <p>
                  <strong>Dive Logs:</strong> Dive data you enter including
                  location, depth, duration, conditions, and notes.
                </p>
                <p>
                  <strong>User Content:</strong> Photos, posts, and comments you
                  share on the platform.
                </p>
                <p>
                  <strong>Location Data:</strong> GPS coordinates when you log a
                  dive site (with your permission).
                </p>
                <p>
                  <strong>Device Information:</strong> Device type, operating
                  system, and app version for troubleshooting and improvements.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                2. How We Use Your Information
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>To provide and maintain the Scubaspot service</li>
                <li>To display your dive logs and posts to other users</li>
                <li>To enable social features like following and feeds</li>
                <li>To send important service updates and notifications</li>
                <li>To improve and personalize your experience</li>
                <li>To ensure safety and prevent abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                3. Information Sharing
              </h2>
              <div className="mt-3 space-y-3">
                <p>
                  <strong>Public Content:</strong> Your profile, dive logs, and
                  posts are visible to other Scubaspot users by default. You can
                  adjust privacy settings in the app.
                </p>
                <p>
                  <strong>Service Providers:</strong> We may share data with
                  trusted third parties who help us operate the app (e.g.,
                  hosting, analytics).
                </p>
                <p>
                  <strong>Legal Requirements:</strong> We may disclose
                  information if required by law or to protect rights and
                  safety.
                </p>
                <p>We do not sell your personal information to third parties.</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                4. Data Storage &amp; Security
              </h2>
              <p className="mt-3">
                Your data is stored securely using industry-standard encryption
                and security measures. While we strive to protect your
                information, no method of transmission over the internet is 100%
                secure.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                5. Your Rights
              </h2>
              <ul className="mt-3 list-inside list-disc space-y-2">
                <li>Access and download your dive data</li>
                <li>Update or correct your account information</li>
                <li>Delete your account and associated data</li>
                <li>Opt out of marketing communications</li>
                <li>Adjust privacy settings for your content</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, visit your account settings or contact
                us directly.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                6. Third-Party Services
              </h2>
              <p className="mt-3">
                Scubaspot may integrate with third-party services (e.g., dive
                computers, social platforms). These services have their own
                privacy policies, and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                7. Children&apos;s Privacy
              </h2>
              <p className="mt-3">
                Scubaspot is not intended for users under 13 years of age. We do
                not knowingly collect information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                8. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this privacy policy from time to time. We will
                notify you of significant changes through the app or by email.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                9. Contact Us
              </h2>
              <p className="mt-3">
                For questions about this privacy policy or your data, contact us
                at{' '}
                <a
                  href="mailto:support@scubaspot.co"
                  className="text-primary-600 hover:text-primary-500"
                >
                  support@scubaspot.co
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  )
}

