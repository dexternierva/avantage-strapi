'use strict';

/**
* Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
* to customize this controller
*/

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
    /**
    * Create a record.
    *
    * @return {Object}
    */

    async create(ctx) {
        let entity;

        if (ctx.is('multipart')) {
            const { data, files } = parseMultipartData(ctx);
            entity = await strapi.services.applicants.create(data, { files });
        } else {
            entity = await strapi.services.applicants.create(ctx.request.body);
        }

        entity = sanitizeEntity(entity, { model: strapi.models.applicants });

        // SEND AN EMAIL BY USING THE EMAIL PLUGIN
        await strapi.plugins['email'].services.email.send({
            to: `${entity.email}`,
            from: 'leads@a-vantageinternational.com',
            cc: 'recruitment2@a-vantageinternational.com',
            subject: 'We received your Application',
            text: `
            Dear ${entity.firstName},

            Thank you for registering on our website.

            Your Personal Application Ticket No. (PAT) is ${entity.pat}

            Your online registration is at the same time your PRE-RESERVATION for the German
            Language Training Scholarship. First come, first served!

            Please be advised to keep your PAT no. and have it ready every time you contact us.

            We will review your application and get back to you the soonest possible.

            Qualified applicants will then receive a link to book their online assessment and interview at
            their preferred schedule.

            Thank you very much and stay safe!
            `,
        });

        return entity;
    },
};