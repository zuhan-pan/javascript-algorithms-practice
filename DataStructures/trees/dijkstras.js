class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ vertex: v2, weight: weight });
    this.adjacencyList[v2].push({ vertex: v1, weight: weight });
  }

  shortestPath(start, end) {
    const distances = {};
    const priorityQueue = new PriorityQueue();
    const previous = {};
    const path = [];
    let currentVertex;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
      }
      previous[vertex] = null;
    }

    while (priorityQueue.values.length) {
      currentVertex = priorityQueue.dequeue().val;
      if (currentVertex === end) {
        while (previous[currentVertex]) {
          path.push(currentVertex);
          currentVertex = previous[currentVertex];
        }
        path.push(start);
        return path.reverse();
      }

      for (let neighbor of this.adjacencyList[currentVertex]) {
        const newDistance = distances[currentVertex] + neighbor.weight;
        if (newDistance < distances[neighbor.vertex]) {
          distances[neighbor.vertex] = newDistance;
          previous[neighbor.vertex] = currentVertex;
          priorityQueue.enqueue(neighbor.vertex, newDistance);
        }
      }
    }
  }
}

//a naive basic priority queue
//better queue should be a heap structure for efficient sorting
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor(val = []) {
    this.values = val;
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      index > 0 &&
      this.values[parentIndex].priority > this.values[index].priority
    ) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  dequeue() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    const min = this.values[0];
    this.values[0] = this.values.pop();
    this.sinkDown(0);
    return min;
  }

  sinkDown(idx) {
    let leftChildIdx, rightChildIdx, smallerChildIdx;
    while ((leftChildIdx = 2 * idx + 1) < this.values.length) {
      rightChildIdx = leftChildIdx + 1;
      smallerChildIdx =
        rightChildIdx < this.values.length &&
        this.values[rightChildIdx].priority < this.values[leftChildIdx].priority
          ? rightChildIdx
          : leftChildIdx;

      if (this.values[idx].priority <= this.values[smallerChildIdx].priority)
        break;
      [this.values[idx], this.values[smallerChildIdx]] = [
        this.values[smallerChildIdx],
        this.values[idx],
      ];
      idx = smallerChildIdx;
    }
  }
}
const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'F', 1);
graph.addEdge('D', 'E', 3);
graph.addEdge('F', 'E', 1);

console.log(graph.shortestPath('A', 'E'));
