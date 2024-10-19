// // ================ sumAllItems =========================

// function sumAllItems(array) {
//   if (array.length === 0) {
//     return [];
//   }

//   let sum = 1;
//   for (let i = 0; i < array.length; x++) {
//     sum += sum[i];
//   }
//   console.log(sum);
// }
// console.log(sumAllItems([1, 2, 3, 4]));

// // =====================================================

// // List changes made below:

function sumAllItems(array) {
  if (array.length === 0) {
    return 0;
  } else {
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }

    return sum;
  }
}

console.log(sumAllItems([1, 2, 3, 4]));
