/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  env: {
    NEXTAUTH_URL: "https://nextblog-lime-zeta.vercel.app",
  },
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com", protocol: "https", port: "" },
    ],
  },
};

module.exports = nextConfig;
