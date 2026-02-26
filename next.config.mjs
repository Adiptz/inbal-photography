import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/inbal-photography' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/inbal-photography/' : '',
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
