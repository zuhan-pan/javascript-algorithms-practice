class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const popped = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    const shiftted = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = shiftted.next;
      this.head.prev = null;
      shiftted.next = null;
    }
    this.length--;
    return shiftted;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    if (idx < this.length / 2) {
      let temp = this.head;
      for (let i = 0; i < idx; i++) {
        temp = temp.next;
      }
      return temp;
    } else {
      let temp = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        temp = temp.prev;
      }
      return temp;
    }
  }

  set(idx, val) {
    if (this.get(idx)) {
      this.get(idx).val = val;
      return true;
    }
    return false;
  }

  insert(idx, val) {
    if (idx < 0 || idx >= this.length) return false; // Invalid index
    if (idx === 0) {
      this.unshift(val);
      return true;
    }
    if (idx === this.length - 1) {
      this.push(val);
      return true;
    }
    const current = this.get(idx);
    const newNode = new Node(val);
    newNode.next = current;
    newNode.prev = current.prev;
    current.prev.next = newNode;
    current.prev = newNode;
    this.length++;
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined; // Invalid index
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    const removed = this.get(idx);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.prev = null;
    removed.next = null;
    this.length--;
    return removed;
  }

  reverse() {
    let current = this.head;
    let prev = null;

    // Swap head and tail
    this.tail = this.head;
    this.head = null;

    // Reverse all nodes
    while (current) {
      const next = current.next; // Store next node

      // Reverse pointers
      current.next = prev;
      current.prev = next;

      // Move pointers forward
      prev = current;
      current = next;
    }

    // Update head to the last processed node
    this.head = prev;
  }

  traverse() {
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new DoublyLinkedList();
list.push('3');
list.push('2');
list.push('1');
list.push('0');
list.push('-1');
list.push('-2');

list.insert(3, 'wtf');
list.reverse();
list.traverse();
//DoublyLinkedList({ head: Node({ val: 20, prev: null, next: Node({ val: 15, prev: <circular reference: Object>, next: Node({ val: 10, prev: <circular reference: Object>, next: Node({ val: 5, prev: <circular reference: Object>, next: null }) }) }) }), tail: Node({ val: 5, prev: Node({ val: 10, prev: Node({ val: 15, prev: Node({ val: 20, prev: null, next: <circular reference: Object> }), next: <circular reference: Object> }), next: <circular reference: Object> }), next: null }), length: 4 }).
