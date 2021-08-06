class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return 'The stack is empty';
    } else {
      return this.items.pop();
    }
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  printStack() {
    let str = '';
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + ' ';
    }
    return str;
  }
}


let stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.pop());
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.isEmpty());
