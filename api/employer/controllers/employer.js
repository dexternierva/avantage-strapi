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
            entity = await strapi.services.employers.create(data, { files });
        } else {
            entity = await strapi.services.employers.create(ctx.request.body);
        }

        entity = sanitizeEntity(entity, { model: strapi.models.employers });

        // SEND AN EMAIL BY USING THE EMAIL PLUGIN
        await strapi.plugins['email'].services.email.send({
            to: 'info@a-vantageinternational.com',
            from: 'leads@a-vantageinternational.com',
            cc: 'javier@a-vantageinternational.com',
            subject: 'New Employer Inquiry',
            text: `
                Title: ${entity.title}
                Complete Name: ${entity.completeName}
                Email: ${entity.email}
                Contact Number: ${entity.contactNumber}
                Company Name: ${entity.companyName}
                Company Address: ${entity.companyAddress}
                Categories: ${entity.categories}
                Number of Needed Workers: ${entity.numberOfNeededWorkers}
                Country: ${entity.country}
                Inquiry: ${entity.inquiry}
            `,
        });

        return entity;
    },
};
