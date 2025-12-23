import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLinks } from '@/components/NavLinks'
import scubaspotLogo from '@/images/logos/scubaspot-logo.png'

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start gap-y-12 pt-16 pb-6 lg:py-16">
          <div className="w-full">
            <div className="flex items-center text-gray-900">
              <Image
                src={scubaspotLogo}
                alt="Scubaspot"
                className="h-10 w-auto flex-none"
                unoptimized
              />
              <div className="ml-4">
                <p className="text-base font-semibold">Scubaspot</p>
                <p className="mt-1 text-sm">Log your dives. Share the adventure.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 border-t border-gray-200 pt-8 pb-12 md:flex-row md:justify-between md:pt-6">
          <p className="text-sm text-gray-500">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
          <nav className="flex gap-6 text-sm">
            <Link
              href="/terms"
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 transition-colors hover:text-gray-900"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
