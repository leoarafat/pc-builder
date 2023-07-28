/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: "arafatwithmahi",
    NEXTAUTH_URL: "http://localhost:3000",
    DB_URL: "mongodb://localhost:27017/pc-builder",
    API_URL: "http://localhost:3000",
    GITHUB_ID: "",
    GITHUB_SECRET: "",
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
      "www.startech.com.bd",
      "asset.msi.com",
      "www.skyland.com.bd",
      "www.gskill.com",
      "m.media-amazon.com",
      "www.techlandbd.com",
      "www.elnekhelytechnology.com",
      "www.pngmart.com",
    ],
  },
};
module.exports = nextConfig;
