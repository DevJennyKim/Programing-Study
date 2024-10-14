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
    super(name, year);
    this.part = part;
  }

  sayHello() {
    // return `Hello, my name is ${this.name}. I am in charge of ${this.part}.`;
    return `${super.sayHello()} I am in charge of ${this.part}.`;
  }
}

const yujin = new FemaleIdolModel('Yujin', 2003, 'vocal');
console.log(yujin);

const wonYoung = new IdolModel('Wonyoung', 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yujin.sayHello());
