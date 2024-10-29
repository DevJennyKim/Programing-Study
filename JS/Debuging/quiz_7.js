/*
  Write a function that will zap away X's in a string and replace them with *'s

  Input: "KjDfXgrxTre"
  Output: "KjDf*gr*Tre"
  
  Input: "kXffgXkjxxo"
  Output: "k*ffg*kj**o"
 */
/* 
    Jenny
    1. If the question is given verbally, write it down.
    2. Read the question out loud, make sure you understand what is being asked of you, clarify anything if need be.
    3. Write out an intended input and output for the question, clarify to make sure that you’re working with the proper information
    4. Highlight words in the question that are key points that you must deliver (function, object, array, variable, etc)
    5. Write out pseudocode as steps to execute in order to solve the problem
    6. Write your solution as code, if you can
    7. Test your solution by running through it line by line using your intended input and confirming that you get your intended output.
*/
/*- Highlight : X's in a string and replace them with *'s
- need a function.
- need a Input variable and other variable for a output. => can be global
- method that can checks a string? => replace()
*/
/*
1. declare 2 variable name: str, result
2. write the function strChange() with pram str
3. use the str.rplace() => 'X','*'
4. store that in result
5. return result
6. call the function and pass the arg =>str
*/

function strChange(str) {
  let result = str.replace(/x/gi, '*');
  return result;
}

console.log(strChange('KjDfXgrxTre'));
console.log(strChange('kXffgXkjxxo'));

/*
 Write a function that will take a string as an input and check whether or not that string is a palindrome
 It should return true if it is one, and false if it is't.
*/
/*
palindrome
split() apple =>[a,p,p,l,e]
reverse()

===============================================
1. declare 2 variable
2. write the function, parm str
3. need the result(reverse str) to compare
4. if str === result return true else false
5. consolelog.
*/

function palindromeChecker(str) {
  let a = str.replace(/\s/g, '');
  let result = a.split('').reverse().join('');
  if (a === result) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeChecker('madam'));
console.log(palindromeChecker('banana'));
console.log(palindromeChecker('123456'));
console.log(palindromeChecker('111111'));
console.log(palindromeChecker('abc dcba'));
