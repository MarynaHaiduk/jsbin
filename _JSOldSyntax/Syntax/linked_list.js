class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds an element at the end of list
  add_element(element) {
    let node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      // iterate to the end of the list
      while (current.next) {
        current = current.next;
      }
      // add node
      current.next = node;
    }
    this.size++;
  }
}
