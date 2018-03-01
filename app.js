const express = require('express');
const cookieParser = require('cookie-parser');
const logRequest = require('./src/utils/logger');

const fs = require('fs');

const app = express();

const homePageHandler = require('./src/routes/homePageHandler.js')

app.fs = fs;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(logRequest);

app.get('/', homePageHandler.serveHomePage);

app.use(express.static('public'));

module.exports = app;
