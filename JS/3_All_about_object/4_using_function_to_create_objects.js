/**
 * Using function to create objects
 */
function IdolModel(name, year) {
  // If the function is called without 'new', it creates a new instance
  if (!new.target) {
    return new IdolModel(name, year);
  }

  this.name = name; // Assign name to the object
  this.year = year; // Assign year to the object

  // Method to simulate dancing
  this.dance = function () {
    return `${this.name} is dancing.`; // Returns a string indicating the idol is dancing
  };
}

// Create an instance of IdolModel using 'new'
const yuJin = new IdolModel('Yujin', 2003);
console.log(yuJin); // Log the yuJin object
// console.log(yuJin.dance()); // Uncomment to see the dance method in action
// if I use the web, global == window object

// Calling IdolModel without 'new' will still create an instance as there is if syntax in the object function
const yuJin2 = IdolModel('Yujin', 2003);
console.log(yuJin2); // Log the yuJin2 object
// console.log(global.name); // Uncomment to see the global variable if in Node.js context

// Attempt to create an object using an arrow function
const IdolModelArrow = (name, year) => {
  //error
  this.name = name; // Arrow functions do not have their own 'this', leading to an error
  this.year = year;
};

// Attempting to create an instance using 'new' will cause an error
// const yuJin3 = new IdolModelArrow('Yujin Ahn', 2003); // This will throw an error
