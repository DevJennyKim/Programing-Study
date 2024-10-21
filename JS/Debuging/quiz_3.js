let removeDuplicates = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};
console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 4, 4]));
