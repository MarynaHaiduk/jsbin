const obj = [
    {
        id: 1,
        name: "Mike",
        scores: [
            {score1: 4 },
            { score2: 5 }
        ]
    },
    {
        id: 2,
        name: "John",
        scores: [
            {score1: 4 },
            { score2: 5 }
        ]
    },
    {
        id: 3,
        name: "Kim",
        scores: [
            {score1: 4 },
            { score2: 5 }
        ]
    },
    {
        id: 4,
        name: "Sam",
        scores: [
            {score1: 4 },
            { score2: 5 }
        ]
    }
];

console.log(obj[0]);
console.log(obj[0].scores[0]);
console.log(obj[0].scores[0] = {score1: 14}); // change score with '='
console.log(obj[1].name = "Jim");  // change name
console.log(obj);
console.log(obj.map(el => el));