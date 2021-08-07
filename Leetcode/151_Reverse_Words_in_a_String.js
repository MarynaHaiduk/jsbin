/**
 * @param {string} s
 * @return {string}
 */


const reverseWords = function(s) {
  return s.split(' ').reverse().join(' ').replace(/\s+/g,
    ' ').trim();
};


console.log(reverseWords('  hello world!  '));  // "world! hello"
console.log(reverseWords('a good   example'));  // "example good a"

