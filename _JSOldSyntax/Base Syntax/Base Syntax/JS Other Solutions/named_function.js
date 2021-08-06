'use strict';

process.stdin.on('data', function (data) {
    let input = String(data).split(new RegExp("[\n ]+"));
    main(+(input[0]), +(input[1]));
});

function main(factN, fibN) {
    let math = {
        factorial:
            function factorial(n) {
                if (n > 1) {
                    return n * factorial(n - 1);
                }
                return 1;
            }
    };

    let fib = function fibonacci(n) {
        if (n > 2) {
            return fibonacci(n - 1) + fibonacci(n - 2);
        } else if (n < 1) {
            return 0;
        }
        return 1;
    }

    console.log(math.factorial(factN));
    console.log(fib(fibN));
}
