const key = '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';
const sg = require('sendgrid')(key);
const helper = require('sendgrid').mail;

const _buildRequest = ({from, to, subject, content}) => {
    const fromEmail = new helper.Email(from);
    const toEmail = new helper.Email(to);
    const contentO = new helper.Content('text/html', content);
    const mail = new helper.Mail(fromEmail, subject, toEmail, contentO);

    console.log(from, to, subject, content);

    return sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });
};

exports.send = ({from, to, subject, content}) => {
    const request = _buildRequest({from, to, subject, content});

    return sg.API(request);
};
