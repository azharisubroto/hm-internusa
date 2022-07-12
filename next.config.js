/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [`@svgr/webpack`]
    });

    return config;
  },
  reactStrictMode: false,
  experimental: {
    runtime: 'experimental-edge',
    images: {
      allowFutureImage: true
    }
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['staviq.co']
  },
  swcMinify: true
};

module.exports = nextConfig;
