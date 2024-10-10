/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.clerk.com'],  // Add the Clerk image domain here
  },
};

export default nextConfig;
