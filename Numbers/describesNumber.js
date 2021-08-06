function describesNumber(number) {
  if (number > 0 && number % 2 === 0) {
    return 'Even positive';
  } else if (number < 0 && number % 2 === 0) {
    return 'Even negative';
  } else if (number > 0 && number % 2 !== 0) {
    return 'Odd positive';
  } else if (number < 0 && number % 2 !== 0) {
    return 'Odd negative';
  } else {
    return 'Zero';
  }
}


console.log(describesNumber(342167));
