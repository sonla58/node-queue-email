const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const config = require('config');
const app = express();
const errorHandler = require('errorhandler');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan(('dev')));
app.use(errorHandler());

/**
 * Routes.
 */
app.use(require('./app.routes'));

const port = config.get('port');

app.listen(port, (err) => {
    if (err) console.log(err.message);

    console.log('Email API is listening on port: ' + port);
});