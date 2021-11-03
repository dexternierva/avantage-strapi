module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: ['*'],
      headers: [
        "Content-Type",
        "Authorization",
        "X-Frame-Options",
        "access-control-allow-origin"
      ]
    }
  },
});