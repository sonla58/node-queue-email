const {addSendMail} = require('../queue');

exports.sendMail = (req, res) => {
    const defaultArgs = {
        from: '',
        to: '',
        subject: '',
        content: ''
    };

    const {from, to, subject, content} = Object.assign({}, defaultArgs, req.body);
    const job = addSendMail({from, to, subject, content});

    res.send({
        success: true,
        data: job
    });
};