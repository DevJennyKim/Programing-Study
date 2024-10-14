/**
 * Immutable Object
 */
const yuJin = {
  name: 'Yujin',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin);

/**
 * Extensible
 */
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = 'IVE'; // This won't work after preventExtensions
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin);

/**
 * Seal
 */
const yuJin2 = {
  name: 'Yujin',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(yuJin2);

console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2));

yuJin2['groupName'] = 'IVE'; // This will work
console.log(yuJin2);

delete yuJin2['name']; // This won't work
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
  writable: false, // This will succeed because the property is already defined
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * Freeze
 *
 * Makes the object immutable, preventing any changes.
 */
const yuJin3 = {
  name: 'Yujin',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));

yuJin3['groupName'] = 'IVE'; // This won't work
console.log(yuJin3);

delete yuJin3['name']; // This won't work
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name', {
//     value: 'CodeFactory', // This won't work either
// })
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));

const yuJin4 = {
  name: 'Yujin',
  year: 2003,
  wonYoung: {
    name: 'Wonyoung',
    year: 2002,
  },
};
Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4)); // True
console.log(Object.isFrozen(yuJin4['wonYoung'])); // False - wonYoung is still mutable
