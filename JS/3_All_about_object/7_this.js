/**
 * this
 *
 * JS uses Lexical Scope, which means the upper scope of a function
 * is evaluated at the time of definition.
 *
 * *****However, the binding of the this keyword is determined
 * at the time the object is created.
 */
const testFunction = function () {
  return this;
};

console.log(testFunction());
console.log(testFunction() === global);

const yuJin = {
  name: 'Yujin',
  year: 2003,
  sayHello: function () {
    return `Hello, I am ${this.name}.`;
  },
};

console.log(yuJin.sayHello());

function Person(name, year) {
  this.name = name;
  this.year = year;

  this.sayHello = function () {
    return `Hello, I am ${this.name}.`;
  };
}

const yuJin2 = new Person('Yujin', 2003);
console.log(yuJin2.sayHello());

Person.prototype.dance = function () {
  function dance2() {
    return `${this.name} is dancing.`; //this.name is undefined
  }

  return dance2();
};
console.log(yuJin2.dance());

/**
 * Remember three things about what the this keyword refers to:
 *
 * 1) When called as a regular function, this refers to the top-level object (global or window).
 * 2) When called as a method, this refers to the calling object.
 * 3) When an object is created using the new keyword, this refers to the object.
 */

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */
function returnName() {
  return this.name; //this ==> global now so undefined
}

console.log(returnName());

const yuJin3 = {
  name: 'Yujin',
};

console.log(returnName.call(yuJin3));
console.log(returnName.apply(yuJin3));

/**
 * 1) call -> Passes arguments in order based on commas.
 * 2) apply -> Arguments must be entered as a list.
 */
function multiply(x, y, z) {
  return `${this.name} / Result: ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3, 4, 5));
console.log(multiply.apply(yuJin3, [3, 4, 5]));

/**
 * bind()
 */
const laterFunc = multiply.bind(yuJin3, 3, 4, 5);
console.log(laterFunc);
console.log(laterFunc());
