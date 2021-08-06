function editInPlace(s) {
    for (let i = 0; i <= s.length - 1; i++) {
        s.unshift(s[s.length - 1]);
        s.pop();
    }
    return s
}

// mutate an array declared with const
const s = [5, 7, 2, 8, 3];
console.log(editInPlace(s));  // [2, 5, 7]
