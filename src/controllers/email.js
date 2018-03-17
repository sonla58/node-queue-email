const sgQueue = require('../queue/sengrid-email');
const awsQueue = require('../queue/aws-email');

exports.sendMail = (req, res) => {
    const defaultArgs = {
        from: '',
        to: '',
        subject: '',
        content: ''
    };

    const {from, to, subject, content} = Object.assign({}, defaultArgs, req.body);
    const job = awsQueue.addSendMail({from, to, subject, content});

    return res.send({
        success: true,
        data: job
    });
};