var movies = require('./movies');

var morganneMovies = movies();
morganneMovies.favMovie = "The Notebook";

console.log("Morganne's favorite movie is: " + morganneMovies.favMovie);