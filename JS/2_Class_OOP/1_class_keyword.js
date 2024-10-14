/**
 * Class Keyword
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return `Hello, my name is ${this.name}.`;
  }
}

// constructor

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

console.log(typeof IdolModel);
console.log(typeof alice);
