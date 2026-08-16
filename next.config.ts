import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // WebP-only: AVIF on-the-fly encode is much slower on first load
    formats: ['image/webp'],
    deviceSizes: [640, 828, 1080, 1280],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [60, 70, 75, 80],
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
