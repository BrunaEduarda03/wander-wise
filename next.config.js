/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cf.bstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'static51.com-hotel.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'static51.com-hotel.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'q-xx.bstatic.com',
        port:'',
      },
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com',
        port:'',
      }
    ],
  },
}

module.exports = nextConfig;