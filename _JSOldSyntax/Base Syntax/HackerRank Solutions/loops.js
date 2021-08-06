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

function vowelsAndConsonants(s) {
  let vowels = ['a', 'o', 'u', 'i', 'e'];
  let consonants = [];

  for (let char of s) {
    if (vowels.includes(char)) {
      console.log(char);
    } else {
      consonants += char + '\n';
    }
  }

  console.log(consonants);
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
