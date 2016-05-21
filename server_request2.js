var http = require('http');
var fs = require('fs');

// 404 response
function send404Response(response) {
	// Write a response with a plain text
	response.writeHead(404, {"Content-Type" : "text/plain"});
	response.write("Error 404: Page not found");
}


// Handle a user request
function onRequest(request, response) {
	// If the request is a GET and request is home [/]
	if (request.method == 'GET' && request.url == '/') {
		// Write a response with an HTML file
		response.writeHead(200, {"Content-Type" : "text/html"});
		// Throw a readable stream using a file system
		fs.createReadStream("./index.html").pipe(response);
	} else {
		send404Response(response);
	}
}

http.createServer(onRequest).listen(8888);
console.log("Our server is now running...");