/**
 * @param {string} s
 * @return {string}
 */


const reverseWords = function(s) {
  let arr = s.split(' ');
  let reversedArray = [];

  for (let i = 0; i < arr.length; i++) {
    reversedArray.push(arr[i].split('').reverse().join(''));
  }

  return reversedArray.join(' ');
};


console.log(reverseWords('Let\'s take LeetCode contest'));
// "s'teL ekat edoCteeL tsetnoc"
