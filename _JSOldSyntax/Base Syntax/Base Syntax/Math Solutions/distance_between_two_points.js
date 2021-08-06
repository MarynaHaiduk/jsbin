// Get the distance between point and (0,0).

function distance(x=0, y=0) {
  return ((x ** 2 + y ** 2) ** 0.5);
}

console.log(distance(3, 4));   // 5
console.log(distance(0, 3));   // 3
console.log(distance());  	   // 0


// Get the distance between two points (given their coordinates)

function distance(x1, y1, x2, y2) {
  return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
}

console.log(distance(0, 0, 3, 4));  // 5
console.log(distance(1, 1, 7, 9));  // 10
