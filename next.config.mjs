/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
        allowFutureImage: true
    }
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
