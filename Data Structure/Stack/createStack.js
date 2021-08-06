class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pushItem(element) {
    this.items.push(element);
  }

  popItem() {
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


const stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.popItem());

stack.pushItem(1);
stack.pushItem(2);
stack.pushItem(3);

console.log(stack.printStack());
console.log(stack.peek());

console.log(stack.popItem());
console.log(stack.printStack());
console.log(stack.isEmpty());
