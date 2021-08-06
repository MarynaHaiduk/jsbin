// Copy with spread operator

const population = [1, 155, 4, 5, 6];
// spread operator
const arr2 = [...population, 99];
const arr3 = population;

population.push(10);
console.log(population);  // [1, 155, 4, 5, 6, 10]
console.log(arr2);  // [1, 155, 4, 5, 6, 99]
console.log(arr3);  // [1, 155, 4, 5, 6, 10]

arr2.push(55);
console.log(population);  // [1, 155, 4, 5, 6, 10]
// spread operator
console.log(arr2);  // [1, 155, 4, 5, 6, 99, 55]
console.log(arr3);  // [1, 155, 4, 5, 6, 10]

arr3.push(100);
console.log(population);  // [1, 155, 4, 5, 6, 10, 100]
// spread operator
console.log(arr2);  // [1, 155, 4, 5, 6, 99, 55]
console.log(arr3);  // [1, 155, 4, 5, 6, 10, 100]