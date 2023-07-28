/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: "arafatwithmahi",
    NEXTAUTH_URL: "http://localhost:3000",
    DB_URL: "mongodb://localhost:27017/pc-builder",
    API_URL: "http://localhost:3000",
    GITHUB_ID: "8bf68c6c7037fb156343",
    GITHUB_SECRET: "c5f5a1b326a54ed6791e34f0337da19f9115f957",
  },
  images: {
    domains: [
      "images.pexels.com",
      "www.cloud.ryanscomputers.com",
      "techbd.com.bd",
      "computerimporter.com",
      "images.evga.com",
      "www.lg.com",
      "www.trustedreviews.com",
      "upload.wikimedia.org",
    ],
  },
};
module.exports = nextConfig;
