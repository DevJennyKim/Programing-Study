// Write a function that accepts an array of unique integers between 0 and 9 (inclusive), and returns the missing element.
// The array will always include 9 integers, with one integer between the numbers of 0 and 9 (inclusive) missing.

function findMissingNum(arr) {
  const numList = new Set(arr);
  const missingNum = [];

  for (let i = 0; i <= 9; i++) {
    if (!numList.has(i)) {
      missingNum.push(i);
    }
  }

  return missingNum;
}

const missingNumArray1 = [0, 1, 2, 3, 4, 5, 6, 7, 9];
const missingNumArray2 = [0, 1, 2, 3, 3, 4, 6, 7, 9];
const missingNumArray3 = [0, 1, 2, 3, 4, 5, 7, 9];
console.log(findMissingNum(missingNumArray1));
console.log(findMissingNum(missingNumArray1));
console.log(findMissingNum(missingNumArray1));
