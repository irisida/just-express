const http = require('http');
const fs = require('fs');

/**
 * The http module has a createServer method as part of its API.
 * It takes 1 argument:
 * 1) callback, a callback has 2 arguments, request and response.
 */

const server = http.createServer((req, res) => {
  //console.log('req object: ', req);

  if (req.url === '/') {
    /**
     * the make up of a res
     * 1) sart line, implicit with node
     * 2) header
     * 3) body
     */
    res.writeHead(200, { 'content-type': 'text/html' });
    const homePage = fs.readFileSync('node.html');
    res.write(homePage);
    res.end();
  } else if (req.url === '/node.png') {
    res.writeHead(200, { 'content-type': 'image/png' });
    const image = fs.readFileSync('node.png');
    res.write(image);
    res.end();
  } else if (req.url === '/styles/style.css') {
    res.writeHead(200, { 'content-type': 'text/css' });
    const image = fs.readFileSync('./styles/style.css');
    res.write(image);
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h3>This is the 404 page</h3>');
    res.end();
  }
});

/**
 * createServer returns an object with a listen method.
 * listen takes one argument, the port.
 * 1) port( the port to listen for http traffic on)
 */
server.listen(3000);
