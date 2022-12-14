/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "robohash.org",
      "avatars.dicebear.com",
      "static-cdn.jtvnw.net",
    ],
  },
};
