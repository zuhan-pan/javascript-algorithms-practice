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

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (true) {
      if (val === current.val) return undefined;
      if (val > current.val) {
        if (current.right) current = current.right;
        else {
          current.right = newNode;
          return this;
        }
      } else {
        if (current.left) current = current.left;
        else {
          current.left = newNode;
          return this;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (val > current.val) current = current.right;
      else if (val < current.val) current = current.left;
      else return current;
    }
    return null;
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

const tree = new BinarySearchTree();
tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);

console.log(tree);
console.log(tree.traverse());
