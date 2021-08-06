'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim();
  });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const PI = Math.PI;
  const r = readLine();
  let area = PI * r ** 2;
  let perimeter = 2 * PI * r;

  console.log(area);
  console.log(perimeter);

  try {
    PI = 0;
    console.log(PI);
  } catch (error) {
    console.error('You correctly declared \'PI\' as a constant.');
  }
}
