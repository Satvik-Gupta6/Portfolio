/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Satvik-Gupta6',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/SATVIKG369',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/satveek-gupta',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/MMMNhavcJ9',
        permanent: true,
      },
    ]
  },
}
