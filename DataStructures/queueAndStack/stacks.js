class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    const removed = this.first;
    if (this.size === 1) this.last = null;
    this.first = this.first.next;
    removed.next = null;
    this.size--;
    return removed.val;
  }
}
