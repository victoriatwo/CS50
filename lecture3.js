// Create class to define constructor method to eventually add new Persons
class Person {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
}

// Create an array to sort information of multiple Persons.
const people = [];

// Add info for multiple persons and push to people array
let person1 = new Person('Peter Parker', '+1-415-246-2345');
people.push(person1);

let person2 = new Person('Black Cat', '+1-324-352-4376');
people.push(person2);

console.log(people[1].name);