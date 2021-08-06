class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  addElement(element) {
    this.items.push(element);
  }

  delElement() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    } else {
      return this.items.shift();
    }
  }

  peek() {
    if (this.isEmpty()) {
      return 'No elements in Queue';
    } else {
      return this.items[0];
    }
  }

  print() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}

let queue = new Queue();
console.log(queue.delElement());
console.log(queue.isEmpty());
queue.addElement(10);
queue.addElement(20);
queue.addElement(30);
console.log(queue.peek());
console.log(queue.delElement());
console.log(queue.peek());
console.log(queue.print());
