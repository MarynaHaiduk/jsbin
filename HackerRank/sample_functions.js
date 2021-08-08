'use strict';


process.stdin.on('data', function(data) {
  let input = String(data).split(new RegExp('[\n ]+'));
  main(input[0], +(input[1]), +(input[2]));
});


function greetings(name) {
  console.log('Hello, ' + name);
}


function main(name, a, b) {
  greetings(name);
}
