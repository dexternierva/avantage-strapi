module.exports = ({ env }) => ({
  email: {
    provider: 'smtp',
    providerOptions: {
      host: 'smtp.gmail.com', //SMTP Host
      port: 587, //SMTP Port
      secure: false,
      username: env('SMTP_USERNAME'),
      password: env('SMTP_PASSWORD'),
      rejectUnauthorized: true,
      requireTLS: true,
      connectionTimeout: 1,
    },
    settings: {
      from: 'leads@a-avantageinternational.com',
      replyTo: 'leads@a-avantageinternational.com',
    },
  },
});