// Module wrapper function
// (function(exports, require, __filename, __dirname) {
//
// })
// console.log(__filename, __dirname);


// create a person object
// const person = {
//     name: 'John Doe',
//     age: 30
// };

// create a js class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

// to use this object somewhere else
module.exports = Person;