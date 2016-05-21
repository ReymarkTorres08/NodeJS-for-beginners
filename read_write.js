var fs = require('fs');

fs.writeFileSync("HAHAHA.txt", "Life is a test, patience is the curriculum vitae.");
console.log(fs.readFileSync("HAHAHA.txt").toString());