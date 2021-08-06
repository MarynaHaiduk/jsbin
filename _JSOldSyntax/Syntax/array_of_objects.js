// Arrays of objects
const arr = [
  {
    id: 1,
    firstName: 'One',
    lastName: 'LastOne'
  },
  {
    id: 2,
    firstName: 'Two',
    lastName: 'LastTwo'
  },
  {
    id: 3,
    firstName: 'Three',
    lastName: 'LastThree'
  }
]

console.log(arr);
console.log(arr[0].lastName);

for (let each of arr2) {
  console.log(each.id);
}

// Convert to JSON array of objects JavaScript
const arrJSON = JSON.stringify(arr);
console.log(arrJSON);

// ForEach, map, filter

// return objects!!!
// arr.forEach(function(each) {
//   console.log(each.id);    // 1 2 3
// });

// return array!!!
// const arrId = arr.map(function(each) {
//   return each.id;
// });
// console.log(arrId);   // (3) [1, 2, 3]


// filter  return all from arr where lastName equal it
// const last_name = arr.filter(function(each){
//   return each.lastName === 'LastTwo';
// });
// console.log(last_name);


// return only id where lastName equal it
const last_name = arr.filter(function(each){
  return each.lastName === 'LastTwo';
}).map(function(each){
  return each.id;
});
console.log(last_name);
