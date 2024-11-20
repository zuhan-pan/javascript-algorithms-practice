class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let pre = current;
    while (current.next) {
      pre = current;
      current = current.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = null;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx > this.length - 1 || idx < 0) return null;
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current;
  }

  set(idx, val) {
    let current = this.get(idx);
    if (current) {
      current.val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    const newNode = new Node(val);
    const before = this.get(idx - 1);
    const after = before.next;
    if (before && after) {
      before.next = newNode;
      newNode.next = after;
      this.length++;
      return true;
    }
    return false;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const current = this.get(idx - 1);
    const removed = current.next;
    current.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    this.tail = this.head; // Update the tail to the old head

    while (current) {
      next = current.next; //store the rest of the link
      current.next = prev; //point to the previous new link
      prev = current; //move forwar one step
      current = next; //move forward one step
    }

    this.head = prev;
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

//test
const list = new SinglyLinkedList();
list.push('hello');
list.push('goodbye');
list.push('!').push('lol');

list.reverse();
list.traverse();
