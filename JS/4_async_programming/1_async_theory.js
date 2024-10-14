/**
 * Async theory
 */
// function longWork() {
//     const now = new Date();

//     /**
//      * milliseconds since epoch
//      * Returns the time in milliseconds from January 1, 1970, until the moment this code is executed.
//      */
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while (new Date().getTime() < afterTwoSeconds) {

//     }

//     console.log('Completed');
// }

// console.log('Hello');
// longWork();
// console.log('World');

function longWork() {
  setTimeout(() => {
    console.log('Completed');
  }, 2000);
}

console.log('Hello');
longWork();
console.log('World');
