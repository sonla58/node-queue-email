const express = require('express');
const router = express.Router();

const emailCtrl = require('./controllers/email');

router.all('/', (req, res) => res.send('hi'));
router.all('/ping', (req, res) => res.send('pong'));

/**
 * Email
 */
router.post('/mail', emailCtrl.sendMail);

module.exports = router;