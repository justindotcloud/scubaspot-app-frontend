import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Scubaspot — Dive log app with a social feed'
export const size = {
  width: 1200,
  height: 630,
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 80,
          background:
            'radial-gradient(circle at 20% 10%, rgba(72,0,255,0.35), transparent 45%), radial-gradient(circle at 80% 30%, rgba(72,0,255,0.20), transparent 55%), #0b0b0f',
          color: '#fff',
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            letterSpacing: -1,
            lineHeight: 1.1,
          }}
        >
          Scubaspot
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 36,
            fontWeight: 600,
            letterSpacing: -0.5,
            lineHeight: 1.2,
            maxWidth: 900,
          }}
        >
          Dive log app with a social feed
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 24,
            lineHeight: 1.35,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 950,
          }}
        >
          Log dives. Share photos and videos. Track certifications and gear.
          Discover dive sites worldwide.
        </div>
        <div
          style={{
            marginTop: 34,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 14px',
            borderRadius: 999,
            background: 'rgba(255,255,255,0.10)',
            border: '1px solid rgba(255,255,255,0.18)',
            fontSize: 18,
            color: 'rgba(255,255,255,0.85)',
          }}
        >
          scubaspot.co
        </div>
      </div>
    ),
    size,
  )
}

