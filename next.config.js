/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: "arafatwithmahi",
    NEXTAUTH_URL: "http://localhost:3000",
    DB_URL:
      "mongodb+srv://pc-builder:dlaLug8YHE7HgqDn@cluster0.tjc9clz.mongodb.net/pc-builder?retryWrites=true&w=majority",
    API_URL: "http://localhost:3000",
    GITHUB_ID: "067f91b58f80d023d7db",
    GITHUB_SECRET: "5728be7278536844147c6aad200b7ccf06a7b062",
    GOOGLE_ID:
      "352235711756-u5po56ooip9nu7dc57ulbjf1bcii59kq.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
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
      "e7.pngegg.com",
    ],
  },
};
module.exports = nextConfig;
