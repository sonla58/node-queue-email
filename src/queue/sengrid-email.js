const kue = require('kue');
const queue = kue.createQueue();
const EmailServices = require('../services/SengridEmailServices');

exports.addSendMail = ({from, to, subject, content}) => {
    return queue.create('email', {
        from,
        subject,
        to,
        content
    }).save();
};

queue.process('email', (job, done) => {
    const {data, id} = job;

    console.log(`Run job id: ${id}`);

    EmailServices.send(data).then((result) => {
        console.log(result);

        return done(null, result);
    }).catch(error => {
        return done(error);
    })
});