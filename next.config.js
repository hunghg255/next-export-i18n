const { withHydrationOverlay } = require('next-hydration-overlay/next');

const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: 'export',
  // i18n,
  images: {
    minimumCacheTTL: 60,
    domains: ['s3-alpha-sig.figma.com'],
  },
  headers: async function headers() {
    if (process.env.NODE_ENV === 'development') return [];
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|otf|ttf|woff|woff2)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, must-revalidate',
          },
        ],
      },
    ];
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = isProd ? nextConfig : withHydrationOverlay()(withBundleAnalyzer(nextConfig));
