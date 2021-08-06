function outside() {
    let x = 5;
    function inside() {
        return x * 2;
    }
    return inside;
}
console.log(outside()());  // 10


// как сделать счетчик на замыканиях!!!
function one() {
    let count = 1;
    return function() {
        return count++;
    }
}
const exec1 = one();
console.log(exec1()); // 1
console.log(exec1()); // 2
console.log(exec1()); // 3


function second() {
    let count = [];
    return function(n) {
        count.push(n);
        return count.reduce((acc, cur) => acc + cur, 0) / count.length;
    }
}
const exec2 = second();
console.log(exec2(1)); // 1
console.log(exec2(2)); // 1.5
console.log(exec2(3)); // 2
console.log(exec2(4)); // 2.5