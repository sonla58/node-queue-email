const AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});

const _buildRequest = ({from, to, subject, content}) => {
    return {
        Destination: {
            CcAddresses: [],
            ToAddresses: [to]
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: content
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: subject
            }
        },
        Source: from, /* required */
        ReplyToAddresses: [],
    };
};

exports.send = ({from, to, subject, content}) => {
    const request = _buildRequest({from, to, subject, content});

    // for test
    return Promise.resolve(request);

    // Create the promise and SES service object
    // return new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(request).promise();
};
