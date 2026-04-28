/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  images: {
    unoptimized: true, // GitHub Pages can't optimize images
  },
}

module.exports = nextConfig