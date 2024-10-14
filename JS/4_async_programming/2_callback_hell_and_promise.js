/**
 * Callback
 */
function waitAndRun() {
  setTimeout(() => {
    console.log('Finished');
  }, 2000);
}

// waitAndRun();

function waitAndRun2() {
  setTimeout(() => {
    console.log('Callback 1 finished');
    setTimeout(() => {
      console.log('Callback 2 finished');
      setTimeout(() => {
        console.log('Callback 3 finished');
      }, 2000);
    }, 2000);
  }, 2000);
}

// waitAndRun2();

/**
 * Promise
 */
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Completed');
  }, 2000);
});

// timeoutPromise.then((res) => {
//     console.log('---then---');
//     console.log(res);
// });

const getPromise = (seconds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      // if(xxx){
      //     resolve('Success')
      // }else{
      //     reject('Error');
      // }
      resolve('Error');
    }, seconds * 1000);
  });

// getPromise(3)
//     .then((res) => {
//         console.log('--- first then ---');
//         console.log(res);
//     })
//     .catch((res) => {
//         console.log('--- first catch ---');
//         console.log(res);
//     })
//     .finally(() => {
//         console.log('--- finally ---');
//     });

Promise.all([getPromise(1), getPromise(4), getPromise(1)]).then((res) => {
  console.log(res);
});
