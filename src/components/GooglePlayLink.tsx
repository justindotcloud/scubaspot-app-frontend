import Link from 'next/link'
import clsx from 'clsx'

export function GooglePlayLink({
  color = 'black',
}: {
  color?: 'black' | 'white'
}) {
  return (
    <Link
      href="#"
      aria-label="Get it on Google Play"
      className={clsx(
        'rounded-lg transition-colors overflow-hidden',
        color === 'black'
          ? 'bg-black hover:bg-gray-900'
          : 'bg-white hover:bg-gray-50',
      )}
    >
      <svg viewBox="0 0 125 40" aria-hidden="true" className="h-12 sm:h-14">
        {/* Background */}
        <rect width="125" height="40" rx="5" fill={color === 'black' ? '#000' : '#fff'} />
        {/* Border */}
        <rect x="0.5" y="0.5" width="124" height="39" rx="4.5" stroke={color === 'black' ? '#a6a6a6' : '#000'} strokeWidth="1" fill="none" />
        
        {/* GET IT ON text */}
        <text x="38" y="12.5" fill={color === 'black' ? '#fff' : '#000'} fontSize="6.5" fontFamily="Arial, sans-serif" letterSpacing="0.5">COMING SOON ON</text>
        
        {/* Google Play text */}
        <text x="38" y="29" fill={color === 'black' ? '#fff' : '#000'} fontSize="14" fontFamily="Arial, sans-serif" fontWeight="400">Google Play</text>
        
        {/* Play Store Icon - Triangle */}
        <defs>
          <linearGradient id="playGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00C3FF" />
            <stop offset="100%" stopColor="#1BE691" />
          </linearGradient>
          <linearGradient id="playGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFE000" />
            <stop offset="100%" stopColor="#FFA100" />
          </linearGradient>
          <linearGradient id="playGrad3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF3A44" />
            <stop offset="100%" stopColor="#C31162" />
          </linearGradient>
          <linearGradient id="playGrad4" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#32A071" />
            <stop offset="100%" stopColor="#2DA771" />
          </linearGradient>
        </defs>
        
        {/* Play icon paths */}
        <path fill="url(#playGrad1)" d="M7.3 7.8c-.4.4-.6 1-.6 1.8v20.8c0 .8.2 1.4.6 1.8l.1.1L19 20.8v-.5L7.3 7.8z"/>
        <path fill="url(#playGrad2)" d="M22.9 24.7l-3.9-3.9v-.5l3.9-3.9.1.1 4.6 2.6c1.3.7 1.3 2 0 2.7l-4.7 2.9z"/>
        <path fill="url(#playGrad3)" d="M23 24.6l-4-4L7.3 32.3c.4.5 1.1.5 2 .1l13.7-7.8"/>
        <path fill="url(#playGrad4)" d="M23 16.5L9.3 8.7c-.9-.5-1.6-.4-2 .1L19 20.5l4-4z"/>
      </svg>
    </Link>
  )
}
