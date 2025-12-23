'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import screenshotLogdive from '@/images/screenshot-logdive.png'
import screenshotComments from '@/images/screenshot-comments.png'
import screenshotMapExpanded from '@/images/screenshot-map-expanded.png'
import screenshotCertification from '@/images/screenshot-certification.png'

const features = [
  {
    name: 'Interact with the community',
    description:
      'Join the conversation with fellow divers. Comment on posts, share tips, and build lasting connections with ocean enthusiasts from around the globe.',
    image: screenshotComments,
  },
  {
    name: 'Discover 21.500+ dive sites',
    description:
      'Explore a vast database of dive sites worldwide. Can\'t find what you\'re looking for? Easily create new dive spots and share them with the global diving community.',
    image: screenshotMapExpanded,
  },
  {
    name: 'Log your dives',
    description:
      'Capture every detail of your underwater adventures. Depth, duration, conditions, and wildlife – all in one beautiful dive log.',
    image: screenshotLogdive,
  },
  {
    name: 'Track your certifications',
    description:
      'Keep all your dive certifications in one place. Add your credentials, track your progress, and show off your achievements to the community.',
    image: screenshotCertification,
  },
]

export function PrimaryFeatures() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mobileActiveIndex, setMobileActiveIndex] = useState(0)
  const [mobileCardMinHeight, setMobileCardMinHeight] = useState<number | null>(
    null,
  )
  const slideContainerRef = useRef<React.ElementRef<'div'>>(null)
  const slideRefs = useRef<Array<React.ElementRef<'div'>>>([])
  const cardRefs = useRef<Array<React.ElementRef<'div'>>>([])

  const recalcMobileCardHeights = useCallback(() => {
    // Find the tallest card and use that as the minimum height for all cards.
    const heights = cardRefs.current
      .map((el) => el?.getBoundingClientRect().height ?? 0)
      .filter((h) => h > 0)

    if (heights.length === 0) return

    const max = Math.ceil(Math.max(...heights))
    setMobileCardMinHeight(max)
  }, [])

  useEffect(() => {
    // Mobile-only: highlight the active slide based on what’s most visible.
    if (!slideContainerRef.current) return

    const observer = new window.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (
            entry.isIntersecting &&
            entry.target instanceof HTMLDivElement &&
            entry.intersectionRatio >= 0.6
          ) {
            const idx = slideRefs.current.indexOf(entry.target)
            if (idx !== -1) setMobileActiveIndex(idx)
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: [0.6],
      },
    )

    for (const slide of slideRefs.current) {
      if (slide) observer.observe(slide)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Ensure consistent card heights on mobile carousel.
    // Run a couple times to catch image/font load, and update on resize.
    const raf1 = requestAnimationFrame(() => recalcMobileCardHeights())
    const raf2 = requestAnimationFrame(() => recalcMobileCardHeights())

    const onResize = () => recalcMobileCardHeights()
    window.addEventListener('resize', onResize)

    // If supported, wait for fonts to load then re-measure.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fontsReady = (document as any).fonts?.ready
    if (fontsReady?.then) {
      fontsReady.then(() => recalcMobileCardHeights()).catch(() => {})
    }

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      window.removeEventListener('resize', onResize)
    }
  }, [recalcMobileCardHeights])

  return (
    <section
      id="features"
      aria-label="Features for tracking your dives"
      className="bg-gray-900 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Your dive life, all in one place.
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Log every dive, share your adventures, and connect with a global community of underwater explorers. Scubaspot makes it easy to relive and share your best moments beneath the surface.
          </p>
        </div>
      </Container>

      {/* Mobile view */}
      <div className="mt-16 md:hidden">
        <div
          ref={slideContainerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pl-4 pr-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {features.map((feature, index) => (
            <div
              key={feature.name}
              ref={(ref) => {
                if (ref) slideRefs.current[index] = ref
              }}
              className="w-[85%] max-w-sm flex-none snap-center"
            >
              <div
                ref={(ref) => {
                  if (ref) cardRefs.current[index] = ref
                }}
                className="flex h-full flex-col overflow-hidden rounded-2xl bg-gray-800 p-6"
                style={
                  mobileCardMinHeight
                    ? { minHeight: `${mobileCardMinHeight}px` }
                    : undefined
                }
              >
                <div className="mx-auto w-[240px] overflow-hidden rounded-[2rem] drop-shadow-2xl">
                  <Image
                    src={feature.image}
                    alt={feature.name}
                    className="w-full"
                    onLoad={() => {
                      recalcMobileCardHeights()
                    }}
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-6 flex justify-center gap-3">
          {features.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to feature ${index + 1}`}
              className={`relative h-2 w-2 rounded-full transition-colors ${
                index === mobileActiveIndex ? 'bg-gray-200' : 'bg-gray-600'
              }`}
              onClick={() => {
                slideRefs.current[index]?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                  inline: 'center',
                })
              }}
            >
              <span className="absolute -inset-3" />
            </button>
          ))}
        </div>
      </div>

      {/* Desktop view */}
      <Container className="hidden md:mt-20 md:block">
        <div className="grid grid-cols-12 items-center gap-8 lg:gap-16">
          {/* Feature list */}
          <div className="col-span-6 space-y-6">
            {features.map((feature, index) => (
              <button
                key={feature.name}
                onClick={() => setActiveIndex(index)}
                className={`relative w-full rounded-2xl p-8 text-left transition-colors ${
                  index === activeIndex ? 'bg-gray-800' : 'hover:bg-gray-800/30'
                }`}
              >
                <h3 className="text-lg font-semibold text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </button>
            ))}
          </div>

          {/* Screenshot */}
          <div className="col-span-6 flex justify-center">
            <div className="w-[280px] overflow-hidden rounded-[2rem] drop-shadow-2xl lg:w-[320px]">
              <Image
                src={features[activeIndex].image}
                alt={features[activeIndex].name}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
