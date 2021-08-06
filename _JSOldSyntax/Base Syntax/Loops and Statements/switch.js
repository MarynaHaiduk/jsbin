function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
        case 2:
            answer = "alpha";
            break;
        case 3:
        case 4:
        case 5:
            answer = "beta";
            break;
        case 6:
            answer = "gamma";
            break;
        case 7:
            answer = "delta";
            break;
        default:
            answer = "unknown";
            break;
    }
    return answer;
}

console.log(caseInSwitch(1));  // "alpha"
console.log(caseInSwitch());  // "unknown"
console.log(caseInSwitch(4));  // "beta"


const color = 'red';
const isColor = color === 'red' ? 'color is red' : 'color is blue';
console.log(isColor);


switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('The color is not red or blue');
        break;
}
// output: "color is red"
