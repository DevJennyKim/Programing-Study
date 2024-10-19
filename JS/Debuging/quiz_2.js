// // =============== getMonthName ========================

function getMonthName(mo) {
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  if (mo < 1 || mo > months.length) {
    return 'that is not a valid month';
  } else {
    for (let i = 0; i < months.length; i++) {
      if (i === mo) {
        return months[mo - 1];
      }
    }
  }
}
console.log(getMonthName(1));

// // =====================================================
