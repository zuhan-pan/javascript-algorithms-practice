class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  traverse() {
    const queue = new Queue();
    let visited = [];

    if (!this.root) return [];
    let current = this.root;
    queue.enqueue(current);
    while (queue.size > 0) {
      current = queue.dequeue();
      visited.push(current.val);
      if (current.left) queue.enqueue(current.left);
      if (current.right) queue.enqueue(current.right);
    }
    return visited;
  }
}

//Queue for store data
class QueueNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    const removed = this.first;
    if (this.size === 1) this.last = null;
    this.first = this.first.next;
    removed.next = null;
    this.size--;
    return removed.val;
  }
}
