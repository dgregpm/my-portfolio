/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com', 'images.g2crowd.com', 'cdn.sanity.io'],
  },
  // images: {
  //   remotePatterns: [{
  //     protocol: 'https',
  //     hostname: 'images.g2crowd.com',
  //     port: '',
  //     pathname: '/',
  //   }]
  // }
}

module.exports = nextConfig
