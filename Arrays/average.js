function average(arr) {

    let sumNumbers = 0;

    for (let i = 0; i < arr.length; i++) {
        sumNumbers += arr[i];
    }

    return (sumNumbers / arr.length);
}


console.log(average([1, 2, 3, 4]));  // 2.5
