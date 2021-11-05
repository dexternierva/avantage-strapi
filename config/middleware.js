module.exports = ({ env }) => ({
  settings: {
    cors: {
      enabled: true,
      origin: [
        'https://avantage-strapi-kptng.ondigitalocean.app', 
        'https://avantage-ab3y7.ondigitalocean.app'
      ],
      headers: [
        "Content-Type",
        "Authorization",
        "X-Frame-Options",
        "access-control-allow-origin"
      ]
    }
  },
});