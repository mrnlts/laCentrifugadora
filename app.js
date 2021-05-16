const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', require('./routes/pages'));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;