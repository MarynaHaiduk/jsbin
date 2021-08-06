/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */


const numJewelsInStones = function(J, S) {

  let count = 0;

  for (let i = 0; i < S.length; i++) {
    if (J.includes(S[i])) {
      count++;
    }
  }

  return count;
};


console.log(numJewelsInStones('aA', 'aAAbbbb'));  // 3
console.log(numJewelsInStones('z', 'ZZ'));  // 0
