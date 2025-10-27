/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  // ✅ Allow image optimization for Cloudinary
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
      },
    ],
  },

  // ✅ Add global CSS support
  webpack(config) {
    config.module.rules.push({
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    });
    return config;
  },

  // ✅ Environment variables from .env.local
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    CLOUDINARY_URL: process.env.CLOUDINARY_URL,
  },

  // ✅ Experimental features (optional but recommended)
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;