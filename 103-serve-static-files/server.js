const express = require('express');
const path = require('path');
const app = express();

/**
 * App comes with the 'use' function which is typically
 * used to include / utilise middleware
 */

app.use(express.static('public'));

app.all('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/node.html'));
});

const appPort = 3000;
app.listen(appPort);
console.log(`Server listening on port: ${appPort}`);
