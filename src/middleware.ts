import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')
  const hostHeader = request.headers.get('host')
  // Prefer x-forwarded-host (set by proxies/CDNs); fall back to Host; finally Next's parsed host.
  const host =
    (forwardedHost ?? hostHeader ?? request.nextUrl.host).split(',')[0]?.trim().toLowerCase()

  // Redirect www -> apex for canonical domain consistency.
  if (host === 'www.scubaspot.co') {
    const url = request.nextUrl.clone()
    url.hostname = 'scubaspot.co'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Run on all routes except Next internals/static assets.
    '/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml).*)',
  ],
}


