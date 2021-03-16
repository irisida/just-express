const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const helmet = require('helmet');
app.use(helmet());

// this is the one you need!
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) => {
  res.send('I am alive');
});

app.get('/login', (req, res, next) => {
  console.log('req.query: ', req.query);
  res.render('login');
});

app.post('/process_login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  if (password === 'yes') {
    /**
     * cookie takes 2 options.
     * 1. name of the cooie
     * 2. value it tobe set to
     */
    res.cookie('username', username);
    res.redirect('/welcome');
  } else {
    res.redirect('/login?msg=fail&error=true');
  }
});

app.get('/welcome', (req, res, next) => {
  res.render('welcome', {
    username: req.cookies.username,
  });
});

app.get('/logout', (req, res, next) => {
  res.clearCookie('username');
  res.redirect('/login');
});

app.listen(3000);
