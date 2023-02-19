/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, 
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, immutable',
          },
          {
            key: "Set-Cookie",
            value: "HttpOnly;Secure;SameSite=Strict"
          }
        ],
      },
    ]
  }
}

module.exports = nextConfig
