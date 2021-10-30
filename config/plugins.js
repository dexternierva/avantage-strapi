module.exports = ({ env }) => ({
    email: {
        provider: 'sendgrid',
        providerOptions: {
            apiKey:env('SENDGRID_API_KEY')
        },
        settings: {
            defaultFrom: 'leads@a-vantageinternational.com',
            defaultReplyTo: 'leads@a-vantageinternational.com',
        },
    },
});