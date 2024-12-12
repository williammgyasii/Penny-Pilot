/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "avatar.vercel.sh" },
      { hostname: "www.tapback.co" },
    ],
  },
};

export default nextConfig;
