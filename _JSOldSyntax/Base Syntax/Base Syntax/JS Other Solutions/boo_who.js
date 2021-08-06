function booWho(bool) {
  return typeof bool == "boolean";
}


// Tests
console.log(booWho(null));     // false
console.log(booWho(true));     // true
console.log(booWho("false"));  // false
