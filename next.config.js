/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cards.scryfall.io'
      },
      {
        protocol: 'https',
        hostname: 'svgs.scryfall.io',
        pathname: '/sets/**',
      }
    ]
  }
}

module.exports = nextConfig
