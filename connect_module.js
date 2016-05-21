var connect = require('connect');
var http = require('http');

var app = connect();

/* You can have optional argument of a path */

function profile(request, response) {
	console.log("User requested profile");
}

function forum(request, response) {
	console.log("User requested forum");
}

app.use('/profile', profile);
app.use('/forum', forum);

// function doFirst(request, response, next) {
// 	console.log("Bacon");
// 	//next();
// }

// function doSecond(request, response, next) {
// 	console.log("Tuna");
// 	next();
// }

// The code the handle request is called middleware
// app.use(doFirst);
// app.use(doSecond);

http.createServer(app).listen(8888);
console.log("Server is running...");