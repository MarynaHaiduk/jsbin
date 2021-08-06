function booWho(bool) {
  return typeof bool == 'boolean';
}


console.log(booWho(null));  // false
console.log(booWho(true));  // true
console.log(booWho('false'));  // false
