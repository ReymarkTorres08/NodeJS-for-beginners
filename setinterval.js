// This runs repeatedly every 2 seconds
var cue = 0;
setInterval(function() {
	console.log("Yow!");
	cue++;
	if (cue % 2 === 0) {
		console.log("I love you!");
	}
}, 2000);