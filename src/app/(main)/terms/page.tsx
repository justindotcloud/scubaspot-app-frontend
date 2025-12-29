import { type Metadata } from 'next'

import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
}

export default function Terms() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <div className="mt-12 space-y-10 text-base text-gray-700">
            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By downloading, accessing, or using Scubaspot, you agree to be bound by these Terms &amp; Conditions. If you do not agree, do not use the app.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                2. Account Registration
              </h2>
              <p className="mt-3">
                You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials and for all activities under your account.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                3. Dive Logging &amp; Content
              </h2>
              <p className="mt-3">
                Scubaspot allows you to log dives and share posts with other users. You retain ownership of your content but grant us a license to display, distribute, and promote it within the app. You are solely responsible for the accuracy of your dive logs and the content you post.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                4. User Conduct
              </h2>
              <p className="mt-3">
                You agree not to post content that is illegal, harmful, threatening, abusive, defamatory, or violates the rights of others. We reserve the right to remove content and suspend accounts that violate these terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                5. Safety Disclaimer
              </h2>
              <p className="mt-3">
                Scubaspot is a logging and social platform only. It does not provide dive planning, safety guidance, or certifications. Always dive within your training limits and follow proper safety protocols. We are not liable for any diving incidents or injuries.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                6. Intellectual Property
              </h2>
              <p className="mt-3">
                The Scubaspot name, logo, and app design are our intellectual property. You may not copy, modify, or distribute any part of the app without permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                7. Termination
              </h2>
              <p className="mt-3">
                We may suspend or terminate your access at any time for violations of these terms. You may delete your account at any time through the app settings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                8. Changes to Terms
              </h2>
              <p className="mt-3">
                We may update these terms at any time. Continued use of the app after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                9. Contact
              </h2>
              <p className="mt-3">
                If you have anything else you want to ask,{' '}
                <a href="/contact" className="text-gray-900 underline">
                  reach out to us
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

