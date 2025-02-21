/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    domains: ['utfs.io'],
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
      },
    ],
  },
};

module.exports = nextConfig;
