class Queue {
  constructor() {
    this.items = [];
  }

  is_empty() {
    return this.items.length == 0;
  }

  add_element(element) {
    this.items.push(element);
  }

  del_element() {
    if (this.is_empty()) {
	  return "Queue is empty";
    } else {
      return this.items.shift();
    }
  }

  peek() {
    if (this.is_empty()) {
      return "No elements in Queue";
    } else {
      return this.items[0];
    }
  }

  print() {
    let str = "";
	
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
	}
	
	return str;
  }
}


let queue = new Queue();

console.log(queue.del_element());
console.log(queue.is_empty());

queue.add_element(10);
queue.add_element(20);
queue.add_element(30);

console.log(queue.peek());
console.log(queue.del_element());
console.log(queue.peek());
console.log(queue.print());
