import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

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
  // i18n: {
  //   // These are all the locales you want to support in
  //   // your application
  //   locales: ['en', 'pt-BR'],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: 'en',
  //   // This is a list of locale domains and the default locale they
  //   // should handle (these are only required when setting up domain routing)
  //   // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  //   domains: [
  //     {
  //       domain: 'example.com',
  //       defaultLocale: 'en',
  //     },
  //     {
  //       domain: 'example.br',
  //       defaultLocale: 'pt-BR',
  //     },
  //   ],
  // },
}
export default withNextIntl(nextConfig)
