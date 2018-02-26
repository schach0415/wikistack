'use strict';

const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const path = require('path');

const models = require('./models');

// point nunjucks to the directory containing templates and turn off caching; configure returns an Environment 
// instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);

app.use(volleyball)

app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

app.use(express.static(path.join(__dirname, '/public')));



models.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is listening on port 3000!')
        })
    })
    .catch(err => console.error(err))
