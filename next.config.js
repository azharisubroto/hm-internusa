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
    domains: ['hm-internusa.my.id']
  },
  swcMinify: true
};

module.exports = nextConfig;
