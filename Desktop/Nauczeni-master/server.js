const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
 
// baza danych potem

const app = express();
var server = http.createServer(function (req, res) {
  var requestData = '';
 
  //HTTP 
  if (req.method === "GET") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(pageHTML); 
  } else if (req.method === "POST") {
    req.setEncoding('utf-8');
 
    req.on('data', function(data) {
      requestData += data;
    });

    req.on('end', function() {
      var postData = qs.parse(requestData);
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end('<h1>Your nick: '+ postData.nickname + '</h1>');
    });
  }
});
 
server.listen(3000);
console.log('Server running at http://localhost:3000');