const path = require('path');

// Base file name
console.log(path.win32.basename(__filename));
console.log(path.win32.dirname(__filename));
console.log(path.win32.extname(__filename));

// create path object
console.log(path.parse(__filename));