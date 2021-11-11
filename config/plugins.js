module.exports = ({ env }) => ({
    email: {
        provider: "mailjet",
        providerOptions: {
          publicApiKey: env("MAILJET_PUBLIC_KEY"),
          secretApiKey: env("MAILJET_SECRET_KEY"),
        },
        settings: {
          defaultFrom: "d.nierva@educar-consultancy.com",
          defaultFromName: "AVantage Customer Support",
          defaultTo: "d.nierva@educar-consultancy.com",
          defaultToName: "Customer Support Notification",
        },
    },
});