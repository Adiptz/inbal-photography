import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
