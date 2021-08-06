// -------------------------------------------------------------------
// ************************ Loops and statements *********************
// -------------------------------------------------------------------

// ternary operator / shorthand if
let a = 5;
const z = (a === 5) ? 10 : 20;
console.log("Ternary operator:", z);

let login;
let message = (login == 'admin') ? 'admin' : (login == 'user') ? 'user' :
    (login == '') ? 'not user or admin' : '';


// for
for (let i = 0; i <= 3; i++) {
    console.log(`For Loop Number: ${i}`);
}


// while
let i = 0;
while (i <= 3) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// continue
for (let i = 0; i <= 3; i++) {
    if (i % 2 == 0) continue;
    console.log(i); // 1, 3
}
