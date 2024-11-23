class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      el => el !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      el => el !== vertex1
    );
  }

  removeVertex(vertex) {
    for (let el of this.adjacencyList[vertex]) this.removeEdge(el, vertex);
    delete this.adjacencyList[vertex];
  }

  dfsTraversal(vertex) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    function dfsTraversalHelper(vertex) {
      if (vertex) {
        results.push(vertex);
        visited[vertex] = true;
        adjacencyList[vertex].forEach(v => {
          if (!visited[v]) dfsTraversalHelper(v);
        });
      }
    }

    dfsTraversalHelper(vertex);
    return results;
  }

  dfsTraversalIterative(vertex) {
    const results = [];
    const S = [vertex];
    const visited = {};
    visited[vertex] = true;
    while (S.length > 0) {
      const currentVertex = S.pop();
      results.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(v => {
        if (!visited[v]) {
          visited[v] = true;
          S.push(v);
        }
      });
    }
    return results;
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

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

// DFS Traversal from A
console.log(graph.dfsTraversal('A')); // Expected: ['A', 'B', 'D', 'C', 'E']

// Remove an edge and traverse again
graph.removeEdge('A', 'B');
console.log(graph.dfsTraversal('A')); // Expected: ['A', 'C', 'E']
