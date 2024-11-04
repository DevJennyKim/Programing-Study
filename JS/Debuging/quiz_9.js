// ================== countArray =====================

// Question:
// Given an array of integers, return an array where the first element is the count of positives numbers and the second element is sum of negative numbers.

// ===================================================

const array = [1, -2, 3, -4, 5, -6];
function arrayChecker(array) {
  let count = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      count++;
    } else if (array[i] < 0) {
      sum += array[i];
    }
  }
  result = [count, sum];
  return result;
}

console.log(arrayChecker(array));
