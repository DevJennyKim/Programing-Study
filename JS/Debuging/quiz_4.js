// // //================= displayEvenNumbers =======================
// function displayEvenNumbers() {
//   let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//   let evenNumbers = [];
//   for (let i = 0; i < numbers.length - 1; i++;) {
//     if (numbers % 2 = 0); {
//       evenNumbers.push(i);
//     }
//     return evenNumbers;
//   }
// }
// console.log(displayEvenNumbers())
// // // =====================================================
// // List changes made below:

function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
console.log(displayEvenNumbers());

// // // =====================================================
