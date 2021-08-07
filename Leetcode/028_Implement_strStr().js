/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */


const strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};


console.log(strStr("hello", "ll"));  // 2
console.log(strStr("aaaaa", "bba")); // -1

