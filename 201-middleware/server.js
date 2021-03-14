const express = require('express');
const app = express();

/**
 * Express has two primary uses:
 * 1. Router
 * 2. Middleware that comprises a web framework
 *
 * In express terms, a middleware is any function
 * that has access to the req, res & next objects
 *
 */

function validateUser(req, res, next) {
  /**
   * 1. get infor from the req object
   * 2. query a database
   */
  res.locals.validated = true;
  console.log('info::validateUser function executed');
  next();
}

function validateAdmin(req, res, next) {
  /**
   * 1. get infor from the req object
   * 2. query a database
   */
  res.locals.adminValidated = true;
  console.log('info::validateAdmin function executed');
  next();
}

/**
 * used on all routes
 */
app.use(validateUser); // will be used as a middle ware on all routes

/**
 * will only be used on the /admin route, optional to include
 * a path limitation
 */
app.use('/admin', validateAdmin);

/**
 * effecively just a method limited middleware function
 * like those above that are more generalised. So it's
 * just a path and method specific function.
 */
app.get('/', (req, res, next) => {
  res.send(`<h1>Main page</h1>`);
});

app.get('/admin', (req, res, next) => {
  res.send(`<h1>Admin page</h1>`);
  console.log(res.locals.adminValidated);
});

const appPort = 3000;
app.listen(appPort);
console.log(`Server listening on port: ${appPort}`);
