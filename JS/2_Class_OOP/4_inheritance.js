/**
 * Inheritance
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance() {
    return 'The female idol dances.';
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return 'The male idol sings.';
  }
}

const yujin = new FemaleIdolModel('Yujin', 2003);
console.log(yujin);

const jimin = new MaleIdolModel('Jimin', 1995);
console.log(jimin);

console.log('----------------');
console.log(yujin.dance());
console.log(yujin.name);

console.log(jimin.sing());
console.log(jimin.year);

const jennyKim = new IdolModel('Jenny Kim', 1992);
console.log(jennyKim);

console.log(jennyKim.name);

console.log('----------');

console.log(yujin instanceof IdolModel);
console.log(yujin instanceof FemaleIdolModel);
console.log(yujin instanceof MaleIdolModel);

console.log('----------');
console.log(jimin instanceof IdolModel);
console.log(jimin instanceof FemaleIdolModel);
console.log(jimin instanceof MaleIdolModel);

console.log('-------------');
console.log(jennyKim instanceof IdolModel);
console.log(jennyKim instanceof FemaleIdolModel);
console.log(jennyKim instanceof MaleIdolModel);
