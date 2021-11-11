module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: env('SMTP_HOST', 'smtp.gmail.com'),
      port: env('SMTP_PORT', 587),
      secure: false,
      auth: {
        type: "login",
        user: env('SMTP_USERNAME'),
        pass: env('SMTP_PASSWORD'),
      },
    },
    settings: {
      defaultFrom: 'leads@a-avantageinternational.com',
      defaultReplyTo: 'leads@a-avantageinternational.com',
    },
  },
});