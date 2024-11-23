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
