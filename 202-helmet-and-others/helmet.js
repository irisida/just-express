const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.static('public'));

/**
 * express by itself does not create a req.body attribute
 * these app.use middlewares are responsible for creating
 * the req.body
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * ajax route post handler
 */
app.post('/ajax', (req, res) => {
  console.log(req.headers);
  console.log(req.body);
  res.json('helmet and ajax lecture');
});

const appPort = 3000;
app.listen(appPort);
console.log(`Server listening on port: ${appPort}`);
