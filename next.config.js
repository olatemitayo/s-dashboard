/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // The locales you want to support in your app
    locales: ["ar", "en", "fr", "nl-NL"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "en",
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
