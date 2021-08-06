function outputSeason(month) {
  let season;

  switch (month) {
    case 12:
    case 1:
    case 2:
      season = 'winter';
      break;
    case 3:
    case 4:
    case 5:
      season = 'spring';
      break;
    case 6:
    case 7:
    case 8:
      season = 'summer';
      break;
    case 9:
    case 10:
    case 11:
      season = 'fall';
      break;
    default:
      season = 'error';
  }
  return season;
}


function outputDay(day) {
  let message;

  switch (day) {
    case 6:
    case 7:
      message = 'It is weekend.';
      break;
    default:
      message = 'It is a work day.';
  }
  return message;
}


console.log(`The season is ${outputSeason(3)}.`);
console.log(outputDay(7));

