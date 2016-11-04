var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\nfeature-1 with patch 1\n\nprocess.env=\n" + JSON.stringify(process.env, null, 2));
});

// Listen on port 8000, IP defaults to 127.0.0.1
var port = process.env.PORT || 8000;
server.listen(port);

// Put a friendly message on the terminal
console.log("Server running at :" + port);
