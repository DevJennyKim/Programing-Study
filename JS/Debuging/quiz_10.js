// ================== findSmallestInteger =====================

// Question:
// Given an array of integers, find the smallest integer.

// ============================================================

function findSmallestNum(array) {
  const minValue = Math.min(...array);
  const maxValue = Math.max(...array);
  console.log(
    `Smallest integer is : ${minValue} | Largest Integer is : ${maxValue}`
  );
}

findSmallestNum([25, 9, 76, -29, 20, -82, 48, 51, 82, 36]);

function findInteger2(arr) {
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return console.log('smallest integer is : ', minNum);
}

findInteger2([25, 9, 76, -29, 20, -82, 48, 51, 82, 36]);
