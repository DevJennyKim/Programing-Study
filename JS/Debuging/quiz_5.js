// ================== isNumber =====================

// Question:
// Write a function that checks if all items in an array are numbers. Return a boolean.

// ==============================================

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
//=========================================================
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

//=================================================================

function checker3(array) {
  const result = array.every((item) => typeof item === 'number') ? true : false;
}

checker3(nArray);
