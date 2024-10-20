/**
 * All about objects
 *
 * Different ways to declare objects
 * 1) Creating an object using object literal - the basics {}
 * 2) Creating an instance from a class - class and OOP
 * 3) Using a function to create an object
 */

//the basics
const yuJin = {
  name: 'Yujin',
  year: 2003,
};
console.log(yuJin);

//class type
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
console.log(new IdolModel('Yujin', 2003));

// Constructor function
function IdolFunction(name, year) {
  this.name = name;
  this.year = year;
}

const gaEul = new IdolFunction('Gaeul', 2002);
console.log(gaEul);
