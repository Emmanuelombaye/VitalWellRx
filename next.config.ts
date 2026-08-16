import type { NextConfig } from 'next'

const ONE_YEAR = 60 * 60 * 24 * 365

const immutableCache = [
  {
    key: 'Cache-Control',
    value: `public, max-age=${ONE_YEAR}, immutable`,
  },
]

const nextConfig: NextConfig = {
  images: {
    // WebP-only: AVIF on-the-fly encode is much slower on first load
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1280],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: ONE_YEAR,
    qualities: [60, 65, 70, 75, 80],
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: immutableCache,
      },
      {
        source: '/_next/image',
        headers: immutableCache,
      },
      {
        source: '/images/:path*',
        headers: immutableCache,
      },
      {
        source: '/shop/:path*',
        headers: immutableCache,
      },
      {
        source: '/treatments/:path*',
        headers: immutableCache,
      },
      {
        source: '/about/:path*',
        headers: immutableCache,
      },
      {
        source: '/hiw/:path*',
        headers: immutableCache,
      },
      {
        source: '/team/:path*',
        headers: immutableCache,
      },
      {
        source: '/:all*(webp|avif|png|jpg|jpeg|gif|svg|ico|woff|woff2)',
        headers: immutableCache,
      },
    ]
  },
  async redirects() {
    return [
      { source: '/treatments/mens-hormone', destination: '/treatments', permanent: false },
      { source: '/treatments/womens-hormone', destination: '/treatments', permanent: false },
      { source: '/treatments/peptide-therapy', destination: '/treatments', permanent: false },
      { source: '/treatments/mens-hairloss', destination: '/treatments', permanent: false },
      { source: '/treatments/fertility-mens', destination: '/treatments', permanent: false },
      { source: '/treatments/cjc-ipamorelin', destination: '/treatments', permanent: false },
      { source: '/treatments/ghk-cu', destination: '/treatments', permanent: false },
      { source: '/treatments/odt-tablets', destination: '/treatments', permanent: false },
      { source: '/shipping-fulfillment', destination: '/shipping', permanent: false },
    ]
  },
}

export default nextConfig
