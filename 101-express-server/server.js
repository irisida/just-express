const express = require('express');

/**
 * an app is essentially a variable we create that is
 * equated to the express function createApplication.
 * This function is exported from the express modules
 * lib directory. By invoking the express variable we
 * have therefore excuted the createApplication()
 */
const app = express();

/**
 * .all takes two args
 * 1) the route
 * 2) the callback to run
 *
 * Note that express handles the basic headers and the
 * mimeType for us, also the statusCode.
 * It also handles the .end() function we would require
 * at the end of the handling routine in pure node
 */
app.all('*', (req, res) => {
  res.send(`<h2>This is the HOME page</h2>`);
});

app.listen(3000);
