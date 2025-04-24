const { createContentCollectionPlugin } = require("@content-collections/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

// Create the plugin instance, specifying the config path
const withPlugin = createContentCollectionPlugin({
  // Use the relative path again, as absolute shouldn't be necessary
  configPath: "./collections.ts",
});

// Apply the plugin to the Next.js config
module.exports = withPlugin(nextConfig); 