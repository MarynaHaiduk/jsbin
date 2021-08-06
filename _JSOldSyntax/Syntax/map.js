
//-----------------------------------------------------
// Array.reduce()
// The reduceRight() method runs a function on each array element
// to produce (reduce it to) a single value.
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}

//-----------------------------------------------------
// Array.reduceRight()
// The reduceRight() works from right-to-left in the array
var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
