/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  // env: {
  //   MONGO_URI:
  //     "mongodb+srv://rizky123:rizky123@cluster0.t2swy.mongodb.net/blogapp?retryWrites=true&w=majority",
  //   JWT_SECRET: "password123",
  //   NEXTAUTH_URL: "https://blogapp-next-six.vercel.app",
  //   NEXTAUTH_SECRET: "aldjasdsjfb20o3980dn",
  // },
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com", protocol: "https", port: "" },
    ],
  },
};

module.exports = nextConfig;
