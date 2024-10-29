/*
Remember the goal is to show your thought process and how your arrive to a solution. Does not have to be semantic code but better if you can. 

Tips from the lecture Morning Challenges slides:  
Think about the question and what is being asked of you
Determine the important factors of the question and what type of result you should be delivering
Can clarify the requirements of the question by writing an input/output or starting values/finishing values
Write your solution in plain english before attempting to write a code solution. 
*/

// ================== removeFirstAndLast =====================

// Question:
// Create a function that removes the first and last characters of a word.

// ==========================================================
// Add your solutions below with your name and solution.

let word = 'characters';
let result = '';
// function removes(word) {
//   let removeFirst = word.slice(1);
//   let removeLast = removeFirst.slice(0, -1);
//   result = removeLast;
//   return console.log(result);
// }

// removes(word);

function removes(word, removeStart = 1, removeEnd = 1) {
  let result = word.slice(removeStart, word.length - removeEnd);
  console.log(result);
  return result;
}
removes(word);
