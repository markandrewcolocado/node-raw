// importing an object. (common js)
// const person = require('./person');

// importing a class.
// const Person = require('./person');

// accessing object properties
// console.log(person.name);

// instantiating Person class
// const person1 = new Person('Juan', 25);
// accessing class method
// person1.greeting();



// calling event emitter
// const Logger = require('./logger');
// const logger = new Logger();
//
// logger.log('Message with uuid');
// logger.append('uuid', 'Append message');



// Creating a basic server
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-type': 'text/html' });
            res.end(content);
        });
    }
    if (req.url === '/api/users') {
        const users = [
            { name: 'Bob Smith', age: 40 },
            { name: 'John Doe', age: 30 }
        ];
        res.writeHead(200, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(users));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));