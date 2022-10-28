module.exports = {
    async headers() {
        return [
          {
            source: '/:all*(svg|jpg|png)',
            locale: false,
            headers: [
              {
                key: 'Cache-Control',
                value: 'public, max-age=86400, immutable',
              }
            ],
          },
        ]
    }
};