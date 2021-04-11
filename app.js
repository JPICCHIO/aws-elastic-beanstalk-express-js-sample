const express = require('express');
const app = express();
const port = 8080;
var http = require('http');
var dt = require('./myfirstmodule')

app.get('/', (req, res) => res.send('Hello Jeffrey Again!!'));

/* added following from node.js tutorial with http and dt vars)*/
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<font color=red>The date and time are currently:  " + dt.myDateTime()+"</p>");
res.end

app.listen(port);
console.log(`App running on http://localhost:${port}`);
