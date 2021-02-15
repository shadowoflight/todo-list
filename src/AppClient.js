//const createError = require('http-errors');
const express = require('express');
//const cookieParser = require('cookie-parser');
const app = express();

const deletedRouter = require('./todo/router');

app.use('/deleteditems',deletedRouter);
module.exports = app;