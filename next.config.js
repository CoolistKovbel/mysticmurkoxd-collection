/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'scarlet-husky-loon-439.mypinata.cloud',
          },
        ]
    }
}

module.exports = nextConfig
