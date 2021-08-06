function productOfArray(arr){
  let mult = 1;
  
  if (arr.length === 0) {
    mult = 0;
  } 
  
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      mult *= arr[i];
    }
  }

  return mult;
}

console.log(productOfArray([1, 2, 4]));  // 8
