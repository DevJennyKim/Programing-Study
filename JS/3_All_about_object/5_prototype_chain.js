/**
 * Prototype
 */
const testObj = {};

// __proto__ is a property that exists on all objects.
// In class-based programming, it corresponds to the parent class.
console.log(testObj.__proto__); // Logs the prototype of testObj, which is Object.prototype

function IdolModel(name, year) {
  this.name = name; // Assign name to the object
  this.year = year; // Assign year to the object
}

console.log(IdolModel.prototype); // Logs the prototype of the IdolModel function

// Display the constructor reference of the prototype
console.dir(IdolModel.prototype, { showHidden: true });

// Circular reference checks
console.log(IdolModel.prototype.constructor === IdolModel); // true
console.log(IdolModel.prototype.constructor.prototype === IdolModel.prototype); // true

// Create an instance of IdolModel
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.__proto__); // Logs the prototype of the yuJin instance
console.log(yuJin.__proto__ === IdolModel.prototype); // true

console.log(testObj.__proto__ === Object.prototype); // true

console.log(IdolModel.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(IdolModel.prototype.__proto__ === Object.prototype); // true

console.log(yuJin.toString()); // Calls the toString method on yuJin
console.log(Object.prototype.toString()); // Logs the default Object toString method

function IdolModel2(name, year) {
  this.name = name; // Assign name to the object
  this.year = year; // Assign year to the object

  // Method to simulate saying hello
  this.sayHello = function () {
    return `${this.name}이 인사를 합니다.`; // Returns a greeting string
  };
}

// Create instances of IdolModel2
const yuJin2 = new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello()); // Calls sayHello on yuJin2
console.log(wonYoung2.sayHello()); // Calls sayHello on wonYoung2
console.log(yuJin2.sayHello === wonYoung2.sayHello); // false, different function instances

console.log(yuJin2.hasOwnProperty('sayHello')); // true, sayHello is an instance property

function IdolModel3(name, year) {
  this.name = name; // Assign name to the object
  this.year = year; // Assign year to the object
}

// Define sayHello method on the prototype
IdolModel3.prototype.sayHello = function () {
  return `${this.name}이 인사를 합니다.`; // Returns a greeting string
};

// Create instances of IdolModel3
const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2004);

console.log(yuJin3.sayHello()); // Calls sayHello on yuJin3
console.log(wonYoung3.sayHello()); // Calls sayHello on wonYoung3

console.log(yuJin3.sayHello === wonYoung3.sayHello); // true, both share the same prototype method

console.log(yuJin3.hasOwnProperty('sayHello')); // false, sayHello is a prototype property

// Static method on the constructor
IdolModel3.sayStaticHello = function () {
  return '안녕하세요 저는 static method 입니다.'; // Returns a static greeting string
};

console.log(IdolModel3.sayStaticHello()); // Calls the static method

/**
 * Overriding
 */
function IdolModel4(name, year) {
  this.name = name; // Assign name to the object
  this.year = year; // Assign year to the object

  // Instance method to say hello
  this.sayHello = function () {
    return '안녕하세요 저는 인스턴스 메서드입니다!'; // Returns an instance method greeting
  };
}

// Prototype method to say hello
IdolModel4.prototype.sayHello = function () {
  return '안녕하세요 저는 prototype 메서드입니다!'; // Returns a prototype method greeting
};

const yuJin4 = new IdolModel4('안유진', 2003);

// Property shadowing - the instance method overrides the prototype method
console.log(yuJin4.sayHello()); // Calls the instance method

/**
 * getPrototypeOf, setPrototypeOf
 *
 * Changing the __proto__ of an instance vs. changing the prototype of a function
 */
function IdolModel(name, year) {
  this.name = name; // Assign name to the object
  this.year = year; // Assign year to the object
}

// Prototype method to say hello
IdolModel.prototype.sayHello = function () {
  return `${this.name} 인사를 합니다.`; // Returns a greeting string
};

function FemaleIdolModel(name, year) {
  this.name = name; // Assign name to the object
  this.year = year; // Assign year to the object

  // Method to simulate dancing
  this.dance = function () {
    return `${this.name}가 춤을 춥니다.`; // Returns a dancing string
  };
}

// Create instances of IdolModel and FemaleIdolModel
const gaEul = new IdolModel('가을', 2004);
const ray = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__); // Logs the prototype of gaEul
console.log(gaEul.__proto__ === IdolModel.prototype); // true
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); // true

console.log(gaEul.sayHello()); // Calls sayHello on gaEul
console.log(ray.dance()); // Calls dance on ray
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // true
// console.log(ray.sayHello()); // Will throw an error because ray does not have sayHello

// Change the prototype of ray to IdolModel.prototype
Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello()); // Now ray can call sayHello

// Check constructor references
console.log(ray.constructor === FemaleIdolModel); // true
console.log(ray.constructor === IdolModel); // false
console.log(gaEul.constructor === IdolModel); // true
console.log(Object.getPrototypeOf(ray) === FemaleIdolModel.prototype); // false, now it's IdolModel.prototype
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); // true
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // false

// Changing the prototype of FemaleIdolModel
FemaleIdolModel.prototype = IdolModel.prototype;

// Create a new instance of FemaleIdolModel
const eSeo = new FemaleIdolModel('이서', 2007);
console.log(Object.getPrototypeOf(eSeo) === FemaleIdolModel.prototype); // false, it's now IdolModel.prototype
console.log(FemaleIdolModel.prototype === IdolModel.prototype); // true
