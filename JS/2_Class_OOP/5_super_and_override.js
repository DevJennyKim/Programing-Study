/**
 * Super and Override
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `Hello, my name is ${this.name}.`;
  }
}

class FemaleIdolModel extends IdolModel {
  // Vocals / Dance
  part;

  constructor(name, year, part) {
    super(name, year); // Use 'super' to bring in values from the parent class
    this.part = part;
  }

  sayHello() {
    // return `Hello, my name is ${this.name}. I am in charge of ${this.part}.`; // Use 'this' to refer to values inside the constructor.
    return `${super.sayHello()} I am in charge of ${this.part}.`; // Use 'super' to bring in functions from the parent class
  }
}

const yujin = new FemaleIdolModel('Yujin', 2003, 'vocal');
console.log(yujin);

const wonYoung = new IdolModel('Wonyoung', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yujin.sayHello());
