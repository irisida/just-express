const express = require('express');
const path = require('path');

const app = express();

const helmet = require('helmet');
app.use(helmet());

// serve up static files
app.use(express.static('public'));

// parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Using express as a renderer requires:
 * 1) definitionof a view engine (ejs, moustache, handlebars, pug )
 * 2) inside one of the routes we have a res.render
 * with the file and the data we want to send.
 * 3) express uses the node module for given engineand parses the
 * file that was passed to combine the template and the data and
 * produce a page that can be sent as the response that is made
 * up of html, js, css.
 */

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
  res.render('index');
});

const PORT = 3000;
app.listen(PORT);
console.log(`Server listening on port: ${PORT}`);
