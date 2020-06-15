var http = require('http');
var qs = require('querystring');
 
var pageHTML = '<html>' +
  '<head>' +
    '<title>Login Page</title>' +
    '<meta charset="utf-8">' +
  '</head>' + 
  '<body>' +
    '<form method="post" action="">' +
      '<div>' +
        '<label for="nickname">Nickname:</label>' +
        '<input type="text" name="nickname">' +  
        '<label for="password">Password:</label>' +
        '<input type="text" name="paswword">' +
      '</div>' +
      '<div>' +
        '<input type="submit" value="send it">' +
      '</div>' +
    '</form>' +
  '</body>' +
'</html>';
 
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