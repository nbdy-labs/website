/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // ponytail: static export has no image optimizer
};

export default nextConfig;
