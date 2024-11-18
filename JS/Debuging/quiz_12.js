// Question: given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//Example: if the input is "Hello World" the output would be --> ("Hello World" --> "Hheelllloo Wwoorrlldd")

const input = 'Hello World';

function solution(str) {
  let answer = '';
  for (let i of str) {
    if (i !== ' ') {
      answer += i + (i === i.toUpperCase() ? i.toLowerCase() : i);
    } else {
      answer += ' ';
    }
  }
  return answer;
}

console.log(solution(input));
