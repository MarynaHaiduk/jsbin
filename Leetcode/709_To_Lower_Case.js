/**
 * @param {string} str
 * @return {string}
 */


const toLowerCase = function (str) {
    let newStr = '';
    let value = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
            value = str.charCodeAt(i) + 32;
            newStr += String.fromCharCode(value);
        } else {
            newStr += str[i];
        }
    }
    return newStr;
};


console.log(toLowerCase("LOVELY"));  // "lovely"
console.log(toLowerCase("Hello"));  // "hello"
console.log(toLowerCase("here"));  // "here"
