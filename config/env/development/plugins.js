module.exports = ({ env }) => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: 'localhost',
      port: 1337,
      ignoreTLS: true,
      ignoreSSL: true
    },
  },
});