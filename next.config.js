/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: { remotePatterns: [{ protocol: "https", hostname: "*" }] },
  experimental: {
    serverActions: true,
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};

module.exports = nextConfig;
