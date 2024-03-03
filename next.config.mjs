/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'edge.sitecorecloud.io'],
  },
  async redirects() {
    return [
      {
        source: '/feature/redirect',
        destination: '/feature/redirected',
        permanent: true,
      },
    ]
  },
  i18n: {
    locales: ['en-US', 'fr'],
    defaultLocale: 'en-US',
  },
};

export default nextConfig;