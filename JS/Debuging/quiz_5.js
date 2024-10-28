// ================== isNumber =====================

// Question:
// Write a function that checks if all items in an array are numbers. Return a boolean.

// ==============================================
/**
 * input : nArray[1,2,3,4,5,6]
 * result : result = true
 * 1. declare the const nArray
 * 2. use the for
 */

const nArray = [1, 2, 3, 'true', 5, 6];
let result1 = [];
function checker1(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      result1.push(true);
    } else {
      result1.push(false);
    }
  }
}
checker1(nArray);
console.log(result1);

let result;
function checker2(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
      result = false;
      break;
    }
  }
}

checker2(nArray);
console.log(result);
