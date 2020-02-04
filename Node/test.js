var http = require('http');
var Hello= require("./module");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  res.end(Hello.HelloWorld());
}).listen(8080); 