module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST', 'smtp.gmail.com'),
      port: env('SMTP_PORT', 587),
      auth: {
        type: 'OAuth2',
        user: env('SMTP_USERNAME'),
        clientId: env('CLIENT_ID'),
        clientSecret: env('CLIENT_SECRET'),
        refreshToken: env('REFRESH_TOKEN'),
        accessToken: env('ACCESS_TOKEN')
      },
    },
    settings: {
      defaultFrom: 'leads@a-avantageinternational.com',
      defaultReplyTo: 'leads@a-avantageinternational.com',
    },
  },
});