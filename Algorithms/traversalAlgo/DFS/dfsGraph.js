class Graph {
  constructor() {
    this.adjacencyList = {};
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
}
