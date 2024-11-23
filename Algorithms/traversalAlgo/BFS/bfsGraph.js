class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  bfsTraversal(vertex) {
    const results = [];
    const queue = new Queue();
    const visited = {};
    queue.enqueue(vertex);
    visited[vertex] = true;
    while (queue.size > 0) {
      const currentVertex = queue.dequeue();
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(v => {
        if (!visited[v]) {
          visited[v] = true;
          queue.enqueue(v);
        }
      });
    }
    return results;
  }
}

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
