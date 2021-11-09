'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
        async afterCreate(data) {
            await strapi.plugins['email'].services.email.send({
                to: 'recruitment@a-vantageinternational.com',
                from: 'leads@a-vantageinternational.com',
                cc: 'javier@a-vantageinternational.com',
                bcc: 'recruitment3@a-vantageinternational.com',
                subject: 'New Applicantion Form Submitted',
                text: `
                    PAT: ${data.pat}
                    How did you learn about us?: ${data.survey}
                    Last Name: ${data.lastName}
                    First Name: ${data.firstName}
                    Middle Name: ${data.middleName}
                    Birthdate: ${data.birthDate}
                    Messenger Name: ${data.messenger}
                    Phone Number: ${data.phoneNumber}
                    Email: ${data.email}
                    Job Applying For: ${data.jobApplyingFor}
                    Registration Purpose: ${data.registrationPurpose}
                    Address: ${data.address}
                    Region: ${data.region}
                    License Number: ${data.licenseNumber}
                    Working Abroad?: ${data.workingAbroad}
                    Agreed To Terms?: ${data.acceptTerms}
                    Agreed To Recording?: ${data.agreedToRecording}
                `,
            });
        },
    },
};
