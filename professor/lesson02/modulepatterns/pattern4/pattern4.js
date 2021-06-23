// Pattern - pattern4.js 
class Person {
    constructor(name = 'Josh Edward') {
        this.name = name;
    }

    getName() {
        console.log(this.name);
    }
}

module.exports = Person;