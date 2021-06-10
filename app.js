const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.use('/', require('./routes/pages'));
app.use('/histories', require('./routes/histories'));

module.exports = app;