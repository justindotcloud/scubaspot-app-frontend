import Image from 'next/image'

import { AppStoreLink } from '@/components/AppStoreLink'
import { GooglePlayLink } from '@/components/GooglePlayLink'
import { Container } from '@/components/Container'
import screenshotFeed from '@/images/screenshot-feed.png'
import screenshot2 from '@/images/screenshot-map.png'
import screenshotProfile from '@/images/screenshot-profile.png'

export function Hero() {
  return (
    <div className="relative overflow-hidden">
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
        <div className="relative z-10 flex h-full items-start pt-24 sm:pt-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center sm:max-w-3xl lg:max-w-5xl">
              <h1 className="text-balance font-outfit text-5xl font-medium tracking-tight text-white sm:text-6xl lg:whitespace-nowrap lg:text-7xl">
                Log your dives. Share your adventure.
              </h1>
              <p className="mt-6 text-lg text-gray-200">
                Scubaspot is the dive log app that helps you track every dive,
                discover new spots, and connect with divers worldwide. Your
                underwater journey deserves to be remembered.
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Screenshot Section */}
      <div className="relative bg-gray-50">
        <div className="mx-auto w-full px-4 py-4 sm:py-8">
          {/* Screenshots */}
          <div className="-mt-64 flex w-full items-center justify-center gap-4 sm:-mt-72 sm:gap-6 lg:-mt-[22rem] lg:gap-8">
            {/* Left Screenshot (smaller) */}
            <div className="hidden w-[200px] overflow-hidden rounded-[1.5rem] drop-shadow-2xl sm:block sm:w-[240px] lg:w-[280px]">
              <Image
                src={screenshotProfile}
                alt="Scubaspot app screenshot"
                className="block w-full"
              />
            </div>
            
            {/* Center Screenshot (main) */}
            <div className="w-[240px] overflow-hidden rounded-[2rem] drop-shadow-2xl sm:w-[280px] lg:w-[320px]">
              <Image
                src={screenshotFeed}
                alt="Scubaspot app screenshot"
                className="block w-full"
                priority
              />
            </div>
            
            {/* Right Screenshot (smaller) */}
            <div className="hidden w-[200px] overflow-hidden rounded-[1.5rem] drop-shadow-2xl sm:block sm:w-[240px] lg:w-[280px]">
              <Image
                src={screenshot2}
                alt="Scubaspot app screenshot"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* App Store Buttons Section */}
      <div className="bg-gray-50 py-8 sm:py-12">
        <div className="flex justify-center gap-6">
          <div className="drop-shadow-2xl">
            <AppStoreLink color="black" />
          </div>
          <div className="drop-shadow-2xl">
            <GooglePlayLink color="black" />
          </div>
        </div>
      </div>
    </div>
  )
}
