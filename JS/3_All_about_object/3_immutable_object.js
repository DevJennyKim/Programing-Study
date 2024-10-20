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
console.log(Object.isExtensible(yuJin)); // result => true

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin); // extensible => false

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = 'IVE'; // no error but this won't work after preventExtensions
console.log(yuJin);

delete yuJin['position']; // but delete is working
console.log(yuJin);

/**
 * Seal
 */
console.log('-------');
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

console.log(Object.isSealed(yuJin2)); //false

Object.seal(yuJin2); //make sealed

console.log(Object.isSealed(yuJin2)); //true

yuJin2['groupName'] = 'IVE'; // This will not work
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
console.log('-------');
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
//     value: 'Jenny', // This won't work either
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
