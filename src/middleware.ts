import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Redirect www -> apex for canonical domain consistency.
  if (request.nextUrl.hostname === 'www.scubaspot.co') {
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


