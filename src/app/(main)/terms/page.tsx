import { type Metadata } from 'next'
import Link from 'next/link'

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
            Last updated: December 29, 2025
          </p>

          <div className="mt-12 space-y-10 text-base text-gray-700">
            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                1. Acceptance of Terms
              </h2>
              <p className="mt-3">
                By downloading, installing, accessing, or using Scubaspot
                (&quot;Scubaspot&quot;, &quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;), you agree to these Terms &amp; Conditions
                (&quot;Terms&quot;). If you do not agree, do not use the app.
              </p>
              <p className="mt-3">
                These Terms apply to all users, including guests where
                applicable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                2. Eligibility &amp; Account Registration
              </h2>
              <p className="mt-3">
                You must provide accurate, current information when creating an
                account and keep your account information up to date. You are
                responsible for maintaining the confidentiality of your login
                credentials and for all activity that occurs under your account.
              </p>
              <p className="mt-3">You agree not to:</p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>
                  Create accounts using false information or impersonate others
                </li>
                <li>
                  Share or sell your account, or use another person&apos;s
                  account without permission
                </li>
                <li>
                  Attempt to access areas of the app you are not authorized to
                  use
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                3. Dive Logging, Posts &amp; Your Content
              </h2>
              <p className="mt-3">
                Scubaspot lets you log dives and share posts, photos, videos,
                comments, and other materials (&quot;User Content&quot;).
              </p>
              <p className="mt-3 font-medium">You own your User Content.</p>
              <p className="mt-3">
                By posting User Content in Scubaspot, you grant us a worldwide,
                non-exclusive, royalty-free, sublicensable license to host,
                store, reproduce, modify (for formatting/technical delivery),
                display, distribute, and promote your User Content within
                Scubaspot and in connection with operating and marketing the
                service.
              </p>
              <p className="mt-3">
                You represent that you have the rights to post the User Content
                and that it does not violate these Terms or any law.
              </p>
              <p className="mt-3">
                You are solely responsible for the accuracy of your dive logs
                and all User Content you submit.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                4. User Conduct &amp; Content Standards (Zero Tolerance)
              </h2>
              <p className="mt-3">
                Scubaspot is a community. We have zero tolerance for
                objectionable content or abusive users.
              </p>
              <p className="mt-3">
                You agree not to post, upload, share, or otherwise make
                available any content that is, or may reasonably be considered:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>Harassment, bullying, threats, or abuse toward any person</li>
                <li>
                  Hate speech or discrimination based on race, ethnicity,
                  nationality, religion, sex, gender identity, sexual
                  orientation, disability, or any other protected characteristic
                </li>
                <li>
                  Sexually explicit, pornographic, or exploitative content
                  (including any content involving minors)
                </li>
                <li>
                  Content that promotes violence, self-harm, or criminal
                  activity
                </li>
                <li>
                  Illegal, harmful, or deceptive content, including scams or
                  fraud
                </li>
                <li>
                  Spam (including repeated, unsolicited, or promotional content)
                </li>
                <li>
                  Defamatory content or content that infringes another
                  person&apos;s rights (including privacy or intellectual
                  property)
                </li>
              </ul>
              <p className="mt-4">
                <strong>Enforcement.</strong> We may remove content, restrict
                visibility, suspend features, or suspend/terminate accounts at
                any time if we believe content or behavior violates these Terms
                or is harmful to the community. We may do so without notice.
              </p>
              <p className="mt-3">
                <strong>Reporting.</strong> If you encounter objectionable
                content or abusive users, please report it through the app. We
                review reports and take appropriate action as soon as reasonably
                practicable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                5. Safety Disclaimer
              </h2>
              <p className="mt-3">
                Scubaspot is a logging and social platform only. It does not
                provide dive planning, decompression guidance, emergency
                procedures, medical advice, or certification instruction.
              </p>
              <p className="mt-3">
                Diving involves serious risks, including injury or death. You
                are solely responsible for:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>Diving within your training and experience limits</li>
                <li>Following recognized safety standards and local laws</li>
                <li>Using appropriate equipment and supervision</li>
              </ul>
              <p className="mt-3">
                To the maximum extent permitted by law, we are not liable for
                any diving incidents, injuries, or damages related to your
                diving activities or reliance on information in the app.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                6. Intellectual Property
              </h2>
              <p className="mt-3">
                Scubaspot, including its name, logo, design, software, and all
                related materials (excluding User Content) are owned by
                Scubaspot and are protected by intellectual property laws.
              </p>
              <p className="mt-3">
                You may not copy, modify, distribute, sell, lease, reverse
                engineer, or create derivative works from any part of the app
                except as expressly permitted by law or with our written
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                7. Termination &amp; Account Deletion
              </h2>
              <p className="mt-3">
                You may delete your account through the app settings (where
                available). We may suspend or terminate your access at any time
                if:
              </p>
              <ul className="mt-2 list-inside list-disc space-y-2">
                <li>You violate these Terms</li>
                <li>Your conduct or content is harmful to the community</li>
                <li>We are required to do so by law or for security reasons</li>
              </ul>
              <p className="mt-3">
                Termination may result in loss of access to your account and
                content. Some provisions of these Terms (including licenses,
                disclaimers, and limitation of liability) survive termination.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">
                8. Changes to These Terms
              </h2>
              <p className="mt-3">
                We may update these Terms from time to time. We will update the
                &quot;Last updated&quot; date above. Continued use of Scubaspot
                after changes become effective constitutes acceptance of the
                updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900">9. Contact</h2>
              <p className="mt-3">
                Questions or concerns?{' '}
                <Link href="/contact" className="text-gray-900 underline">
                  Contact us
                </Link>{' '}
                or visit{' '}
                <a
                  href="https://scubaspot.co"
                  className="text-gray-900 underline"
                >
                  scubaspot.co
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
