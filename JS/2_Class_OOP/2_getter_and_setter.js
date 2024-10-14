/**
 * Getter and Setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name; // Property private declaration
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
    // Used when saving a new value
    this.name = name; // The setter must receive exactly one parameter. this.name is the property declared above, and the value after '=' is the parameter.
    // When a property is made private, direct access is not possible, so we use the setter to change it.
  }
}

const alice = new IdolModel('Alice', 2003);
console.log(alice);
console.log(alice.nameAndYear); // When using the getter, you can access it like a regular key value. You should not call it like a function (e.g., `function()`).

alice.setName = 'Sophia'; // How to use the setter
console.log(alice); // alice's name is changed to Sophia.

class IdolModel2 {
  #name; // Private property
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name; // Getter for the private property
  }

  set name(name) {
    this.#name = name; // Setter for the private property
  }
}

const emily = new IdolModel2('Emily', 2003);
console.log(emily);
console.log(emily.name); // Accessing the private property through the getter.

emily.name = 'Chloe'; // Using the setter to change the name.
console.log(emily.name); // Checking the updated name.
