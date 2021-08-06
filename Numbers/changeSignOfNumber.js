function changeSignOfNumber(num) {
  if (num > 0) {
    return -num;
  } else if (num === 0) {
    return 0;
  } else {
    return -num;
  }
}


console.log(changeSignOfNumber(1));  // -1
console.log(changeSignOfNumber(0));  // 0
console.log(changeSignOfNumber(-2));  // 2
