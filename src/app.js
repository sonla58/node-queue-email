const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const errorHandler = require('errorhandler');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan(('dev')));
app.use(errorHandler());

app.listen(4567, () => {
    console.log('App is listening on port: 4567');
});