const express = require('express');

const app = express();
const appPort = 3000;

/**
 * app object adds the http/rest verbs
 *
 * A catch all route example:
 *
 * app.all('/', (req, res) => {
 *   res.send(`<h2>This is the HOME page</h2>`);
 * });
 *
 */

app.get('/', (req, res) => {
  console.log(req);
  res.send(`<h3>This is a GET request</h3>`);
});

app.post('/', (req, res) => {
  res.send('POST');
});

app.put('/', (req, res) => {
  res.send('PUT');
});

app.delete('/', (req, res) => {
  res.send('DELETE');
});

/**
 * log server status.
 */
app.listen(appPort);
console.log(`The server is running on port: ${appPort}`);
