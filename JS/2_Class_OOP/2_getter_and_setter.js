/**
 * Getter and Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * 1) When processing data to return new values
   * 2) When returning private values
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  set setName(name) {
    this.name = name;
  }
}

const alice = new IdolModel('Alice', 2003);
console.log(alice);
console.log(alice.nameAndYear);

alice.setName = 'Sophia';
console.log(alice);

class IdolModel2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const emily = new IdolModel2('Emily', 2003);
console.log(emily);
console.log(emily.name);

emily.name = 'Chloe';
console.log(emily.name);
