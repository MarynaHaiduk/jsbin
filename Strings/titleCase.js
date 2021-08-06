function titleCase(text) {
  let arr = text.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  return arr.join(' ');
}


console.log(titleCase('to upper case'));  // To Upper Case
