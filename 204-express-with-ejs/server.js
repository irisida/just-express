const express = require('express');
const path = require('path');

const app = express();

const helmet = require('helmet');
app.use(helmet());

// serve up static files
app.use(express.static('public'));

/**
 * Use the express bundled middlewares that are
 * required in order to parse json and urlencoded
 * data into req.body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Setup the view engine related code
 * here we are using ejs or embedded javascript.
 */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

function validateUser(req, res, next) {
  res.locals.validated = true;
  next();
}

app.use(validateUser);

/**
 * routes of the API. The data in the 2nd arg of res.render is
 * appended to res.locals
 */
app.get('/', (req, res, next) => {
  res.render('index', {
    msg: 'success',
  });
});

const PORT = 3000;
app.listen(PORT);
console.log(`Server listening on port: ${PORT}`);
