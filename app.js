import { myArray2 } from './main.js';

// console.log("myArray:" + " " + "[" + myArray2 + "]" );

var http = require('http');
 http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('Hello World!');
 }).listen(8080);