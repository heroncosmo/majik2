/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['majik.com.br', 'images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
