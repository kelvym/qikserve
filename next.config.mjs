/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'preodemo.gumlet.io',
        port: '',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://cdn-dev.preoday.com/challenge/:path*',
      },
    ]
  },
}
export default nextConfig
