import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Scubaspot — Dive log app with a social feed'
export const size = {
  width: 1200,
  height: 600,
}

export default function TwitterImage() {
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
        <div style={{ fontSize: 54, fontWeight: 700, letterSpacing: -1 }}>
          Scubaspot
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 34,
            fontWeight: 600,
            letterSpacing: -0.5,
            maxWidth: 900,
          }}
        >
          Dive log app with a social feed
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 22,
            lineHeight: 1.35,
            color: 'rgba(255,255,255,0.85)',
            maxWidth: 950,
          }}
        >
          Log dives. Share photos and videos. Track certifications and gear.
          Discover dive sites worldwide.
        </div>
      </div>
    ),
    size,
  )
}

