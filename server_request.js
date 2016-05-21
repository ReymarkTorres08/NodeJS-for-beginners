var http = require('http');

function onRequest(request, response) {
	console.log("A user made a request" + request.url);
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write("The quick brown fox.");
	response.end();
}

http.createServer(onRequest).listen(8000);
console.log("Server is now runnning");