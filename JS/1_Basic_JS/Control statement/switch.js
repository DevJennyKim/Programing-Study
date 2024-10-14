const subject = 'sql';
switch (subject) {
  case 'java':
    console.log('Good!');
    break;
  case 'css':
    console.log('Love!');
    break;
  case 'javascript':
    console.log('Love!');
    break;
  default:
    console.log(' default execution');
}

//======================================
// get the number of the score
//if higher then 90 =>A
//if higher then 70 =>B
//if higher then 50 =>C
//others =>D
//======================================

let score1 = prompt('Enter the score');
let value = Math.floor(score1 / 10); //remove the decimal with Math.floor()
switch (value) {
  case 10:
  case 9:
    console.log('You are A');
    break;
  case 8:
  case 7:
    console.log('You are B ');
    break;
  case 6:
    87;
  case 5:
    console.log('You are C');
    break;
  default:
    console.log('You are D');
}
