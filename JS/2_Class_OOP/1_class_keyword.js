/**
 * Class Keyword
 */

class IdolModel {
  // Capitalize the first letter when declaring
  name; // The declared variable here is called a property.
  year; // To become a great developer, it’s good practice to declare what properties have been defined to communicate effectively during development.
  // However, properties can be defined optionally in JavaScript, so it will run without explicitly defining them.
  // Assigning the same name to variables and parameters
  constructor(name, year) {
    this.name = name; // this.name refers to the variable name defined above, while = name represents the parameter received from outside. Even if the names are the same, they are indeed different.
    this.year = year;
    // If you don’t define them in the constructor, they will simply not exist.
    // Moreover, if a property is declared but not defined in the constructor (for example, year), the value of year will be undefined.
  }

  sayName() {
    return `Hello, my name is ${this.name}.`;
  }
}

// Constructor
// The following are instances.
const alice = new IdolModel('Alice', 2003);
console.log(alice);
const sophia = new IdolModel('Sophia', 2002);
console.log(sophia);
const emily = new IdolModel('Emily', 2004);
console.log(emily);
const isabella = new IdolModel('Isabella', 2004);
console.log(isabella);
const chloe = new IdolModel('Chloe', 2004);
console.log(chloe);
const grace = new IdolModel('Grace', 2007);
console.log(grace);

console.log(alice.name);
console.log(alice.year);

console.log(alice.sayName());
console.log(isabella.sayName());

console.log(typeof IdolModel); //function type
console.log(typeof alice); //object type
