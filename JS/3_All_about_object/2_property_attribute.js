/**
 * Property Attribute
 *
 * 1) Data Property - A property that holds an actual value composed of a key and value.
 * 2) Accessor Property - A property that does not hold a value itself but is composed of functions
 *    called when getting or setting other values, such as getters and setters.
 */

const yuJin = {
  name: 'Yujin',
  year: 2003,
};
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year'));

/**
 * if the Object(uppercase=>(Constructor function or class)) and . =>static function
 *
 * result => {value:'2003',writable:true, enumerable:true, configurable:true }
 * 1) value - The actual value of the property.
 * 2) writable - Indicates whether the value can be modified. Setting it to false
 *               prevents modification of the property value.
 * 3) enumerable - Indicates whether the property can be enumerated. Returns true
 *                 if it can be used in a for...in loop, etc.
 * 4) configurable - Determines whether the property attributes can be redefined.
 *                   If false, property deletion or attribute changes are prohibited.
 *                   However, if writable is true, changing the value and writable is allowed.
 */
console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptors(yuJin)); //=>getOwnPropertyDescriptors : it is ok if I just put the value. the result is same.

const yuJin2 = {
  name: 'Yujin',
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year; //new Date().getFullYear(): current year
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yuJin2); // result => {name:'Yujin', year:2003, age:[Getter/Setter]}
console.log(yuJin2.age); //Getter result => 20
yuJin2.age = 32; //Setter
console.log(yuJin2.age); //result => 32
console.log(yuJin2.year); //result =>1991

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));
/**result =>there are no value and writable
 *{
 * get:[function: get age],
 * set:[function: set age],
 * enumerable:true
 * configurable:true
 * }
 */

//Object.defineProperty(object name, 'key', {attributes})
Object.defineProperty(yuJin2, 'height', {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
});
//if don't put any value of writable, enumerable, configurable ==> the value of writable, enumerable, configurable is going to be false when using the "defineProperty"
console.log(yuJin2);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height = 180;
console.log(yuJin2);

/**
 * Writable
 */
Object.defineProperty(yuJin2, 'height', {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

console.log('-------------');
yuJin2.height = 172; // This will not change the height due to writable: false
console.log(yuJin2);

/**
 * Enumerable
 */
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}

Object.defineProperty(yuJin2, 'name', {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log('-------------');
console.log(Object.keys(yuJin2));
for (let key in yuJin2) {
  console.log(key);
}
console.log(yuJin2);
console.log(yuJin2.name);

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height', {
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

// Object.defineProperty(yuJin2, 'height', {
//     enumerable: false, ==>going to be error as configurable is false,
// });

Object.defineProperty(yuJin2, 'height', {
  //value could be changed
  value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
  writable: false, //no error as it is changing to be true to false
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

Object.defineProperty(yuJin2, 'height', {
  writable: true, //yes error. it can not be changed to be false to true
});
