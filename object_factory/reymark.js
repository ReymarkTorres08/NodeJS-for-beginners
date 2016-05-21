var movies = require('./movies');

var reymarkMovies = movies();
reymarkMovies.favMovie = "Deathnote";

console.log("Reymarks's favorite movie is: " + reymarkMovies.favMovie);