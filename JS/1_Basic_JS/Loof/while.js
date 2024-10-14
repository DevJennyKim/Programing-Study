//==============================
//while => until true. =>popular then do while
//do while => only one time
//==============================

let count = 5;
while (count < 5) {
  console.log(count);
  count++;
}
let number = 5;
do {
  console.log(number);
  number++;
} while (number < 5);

//======================================================================================================
//continue : In a loop, the continue statement skips the remaining code and starts the next iteration.
//======================================================================================================
//======================================================================================================
//break: when it meet the break, stop it
//======================================================================================================
let text = '';
for (let i = 0; i < 10; i++) {
  if (i == 3) {
    //continue;
    break;
  }
  text = text + i;
  // console.log(`text[${i}]: `, text);
}

console.log(text);
