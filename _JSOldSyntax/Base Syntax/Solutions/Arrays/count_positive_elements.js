function countOfPositive(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) count++;
    }
    return count;
}

console.log(countOfPositive([1, 2, -3, 4]));
