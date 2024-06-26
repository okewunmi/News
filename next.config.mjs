/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "a.fsdn.com",
      "media.npr.org",
      "img.lemde.fr",
      "ichef.bbci.co.uk",
      "api.time.com",
      "readwrite.com",
      "img.zeit.de",
      "img.buzzfeed.com",
    ],
  },
};

export default nextConfig;
