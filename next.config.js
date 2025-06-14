// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**', // for dev images from Strapi
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        pathname: '/api/**', // for profile avatar URLs
      },
      {
        protocol: 'https',
        hostname: 'secure-ducks-5e2476d3d3.media.strapiapp.com',
        pathname: '/**', // for production images from Strapi
      },
    ],
  },
};

module.exports = nextConfig;
