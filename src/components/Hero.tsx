import Image from 'next/image'
import clsx from 'clsx'

import { AppStoreLink } from '@/components/AppStoreLink'
import { Container } from '@/components/Container'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'

export function Hero() {
  return (
    <div className="relative">
      {/* Video Background Section */}
      <div className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        >
          <source src="/movie.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-end pb-16 sm:pb-24">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
                Share your adventure
              </h1>
              <p className="mt-6 text-lg text-gray-200">
                Track every dive, discover new spots, and connect with divers
                worldwide. Your underwater journey deserves to be remembered.
              </p>
              <div className="mt-8 flex justify-center gap-x-6 gap-y-4">
                <AppStoreLink />
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Featured In Section */}
      <div className="bg-gray-50 py-16 sm:py-20">
        <Container>
          <p className="text-center text-sm font-semibold text-gray-900">
            As featured in
          </p>
          <ul
            role="list"
            className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8"
          >
            {[
              ['Forbes', logoForbes],
              ['TechCrunch', logoTechcrunch],
              ['Wired', logoWired],
              ['CNN', logoCnn, 'hidden xl:block'],
              ['BBC', logoBbc],
              ['CBS', logoCbs],
              ['Fast Company', logoFastCompany],
              ['HuffPost', logoHuffpost, 'hidden xl:block'],
            ].map(([name, logo, className]) => (
              <li key={name} className={clsx('flex', className)}>
                <Image src={logo} alt={name} className="h-8" unoptimized />
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </div>
  )
}
