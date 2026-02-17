/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for GitHub Pages
  output: 'export',

  // GitHub Pages serves from subdirectory in production
  basePath: process.env.NODE_ENV === 'production' ? '' : '',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Strict mode for better development experience
  reactStrictMode: true,

  // Trailing slashes for GitHub Pages compatibility
  trailingSlash: true,

  // Empty turbopack config to avoid warnings
  turbopack: {},
}

module.exports = nextConfig