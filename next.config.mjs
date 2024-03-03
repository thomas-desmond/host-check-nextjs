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
};

export default nextConfig;