'use strict';
process.stdin.on('data', function (data) {
    main(String(data).trim());
});

function main(input) {
    // Split the words read as input into an array of words
    var array = input.split(new RegExp("[ \n]+"));

    // Print array
    console.log(array);

    // Print each of its elements on a new line
    for (let value of array) {
        console.log(value);
    }
}


//------------------------------------------------------
'use strict';

let actress = new Map([
    ["firstName", "Julia"],
    ["lastName", "Roberts"],
    ["dateOfBirth", "October 28, 1967"],
    ["nationality", "American"],
    ["firstMovie", "Satisfaction"]
]);

// Print each Key-Value pair in the map
for (let info of actress) {
    console.log(info);
}

// Print each Key and Value as "Key: Value"
console.log();
for (let info of actress) {
    console.log(info[0] + ": " + info[1]);
}

class Monster {
    constructor(name, home, description) {
        this.name = name;
        this.home = home;
        this.description = description;
    }
}

function main(input) {
    let monster = new Monster(input[0], input[1], input[2]);
    console.log(monster);

    // Print each of its elements on a new line
    for (let property in monster) {
        console.log(property + ": " + monster[property]);
    }
}