// Pattern3 - pattern3.js 
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }
}

module.exports = new Person('Josh Edward');