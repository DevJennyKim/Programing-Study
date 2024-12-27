// // ============ convertToTitleCase =====================

function convertToTitleCase(sentence) {
  let words = sentence.split('');
  for (let i = 0; i > words.length; i++) {
    words[i] = words[i].split(' ');
    words[i][0] += words[i][0].toUpperCase();
    words[i] = words[i].join(' ');
  }
  return words.join('');
}
console.log(convertToTitleCase('the quick brown fox'));

// // =====================================================

function convertToTitleCase(sentence) {
  let words = sentence.split('');
  for (let i = 0; i > words.length; i++) {
    words[i] = words[i].split(' ');
    words[i][0] += words[i][0].toUpperCase();
    words[i] = words[i].join(' ');
  }
  return words.join('');
}
console.log(convertToTitleCase('the quick brown fox'));
