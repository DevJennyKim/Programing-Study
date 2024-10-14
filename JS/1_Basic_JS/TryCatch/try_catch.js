/**
 * try...catch
 *
 * 1) When raising an error -> it's called throwing (throw)
 * 2) When explicitly recognizing it -> it's called catching (catch)
 */
function runner() {
  try {
    console.log('Hello');

    // throw new Error('A major issue occurred!');

    console.log('Jenny Kim');
  } catch (e) {
    //when there is error catch is working
    console.log('---catch---');
    console.log(e);
  } finally {
    //even there is error in the try, finally is working after catch
    console.log('---finally---');
  }
}
runner();
