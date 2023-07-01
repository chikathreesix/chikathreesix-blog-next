/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [{ hostname: "cdn.sanity.io" }]
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === "production"
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production"
  },
  async redirects() {
    return [
      {
        source: '/burning-needs',
        destination: '/post/burning-needs',
        permanent: true,
      },
      {
        source: '/autify-2019',
        destination: '/post/autify-2019',
        permanent: true,
      },
      {
        source: '/why-we-bet-on-testing-automation-now',
        destination: '/post/why-we-bet-on-testing-automation-now',
        permanent: true,
      },
      {
        source: '/autify-one-year-anniversary',
        destination: '/post/autify-one-year-anniversary',
        permanent: true,
      },
      {
        source: '/autify-values',
        destination: '/post/autify-values',
        permanent: true,
      },
      {
        source: '/aiming-for-no1-in-the-global-market',
        destination: '/post/aiming-for-no1-in-the-global-market',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
