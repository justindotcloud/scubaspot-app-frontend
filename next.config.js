/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.scubaspot.co' }],
        destination: 'https://scubaspot.co/:path*',
        statusCode: 301,
      },
    ]
  },
}

module.exports = nextConfig
