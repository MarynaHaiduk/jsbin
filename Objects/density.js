let population = [
  { 'state': 'Connecticut', 'ppl': 3605944 },
  { 'state': 'Maine', 'ppl': 1362359 },
  { 'state': 'Massachusetts', 'ppl': 7029917 },
  { 'state': 'New Hampshire', 'ppl': 1377529 },
  { 'state': 'Rhode Island', 'ppl': 1097379 },
  { 'state': 'Vermont', 'ppl': 643077 },
];


let squareMeters = [
  { 'state': 'Connecticut', 'sqm': 3605 },
  { 'state': 'New Jersey', 'sqm': 9623 },
  { 'state': 'Vermont', 'sqm': 360556344 },
  { 'state': 'New York', 'sqm': 54556 },
  { 'state': 'New Hampshire', 'sqm': 9350 },
];


let density = {};
let tmpKey = 0;
let tmpValue = 0;


for (let i = 0; i < population.length; i++) {
  tmpKey = population[i].state;
  tmpValue = population[i].ppl;

  for (let j = 0; j < squareMeters.length; j++) {
    if (tmpKey === squareMeters[j].state) {
      density[tmpKey] = tmpValue / squareMeters[j].sqm;
      break;
    }
  }
}


console.log(density['Connecticut']);
