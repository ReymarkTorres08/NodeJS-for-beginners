var path = require('path');
var websiteHome = "Desktop/Lady//thequickbrownfox/index.html";
var websiteAbout = "Desktop/Lady/thequickbrownfox/about.html";

/* Path modules */
// Give the normalize path
console.log(path.normalize(websiteHome));
// Give the name of directory
console.log(path.dirname(websiteAbout));
// Gives the file name
console.log(path.basename(websiteAbout));
// Gives the file extension
console.log(path.extname(websiteAbout));

// Local path
console.log(__dirname);
// Local path with filename
console.log(__filename);