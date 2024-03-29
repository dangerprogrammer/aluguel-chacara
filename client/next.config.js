/** @type {import('next').NextConfig} */
const path = require('path'), nextConfig = {
    reactStrictMode: true,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')]
    },
    images: {
      domains: ['lh3.googleusercontent.com']
    },
  }
  
  module.exports = nextConfig;