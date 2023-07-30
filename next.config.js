/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    DB_URL: process.env.DB_URL,
    API_URL: process.env.API_URL,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
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
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};
module.exports = nextConfig;
