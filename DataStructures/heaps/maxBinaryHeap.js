//for any child of n, it's parrent's index is floored (n-1)/2
//for any parent of n, it's child's index is 2n-11 amd 2n+2

class MaxBinaryHeap {
  constructor(val = []) {
    this.values = val;
  }

  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0 && this.values[parentIndex] < this.values[index]) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  extractMax() {
    if (this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();

    const max = this.values[0];
    this.values[0] = this.values.pop();
    this.siftDown(0);
    return max;
  }

  siftDown(idx) {
    let leftChildIdx, rightChildIdx, largerChildIdx;
    while ((leftChildIdx = 2 * idx + 1) < this.values.length) {
      rightChildIdx = leftChildIdx + 1;
      largerChildIdx =
        rightChildIdx < this.values.length &&
        this.values[rightChildIdx] > this.values[leftChildIdx]
          ? rightChildIdx
          : leftChildIdx;

      if (this.values[idx] >= this.values[largerChildIdx]) break;
      [this.values[idx], this.values[largerChildIdx]] = [
        this.values[largerChildIdx],
        this.values[idx],
      ];
      idx = largerChildIdx;
    }
  }
}

const arr = [43, 39, 33, 18, 27, 12];
const maxBinaryHeap = new MaxBinaryHeap(arr);
console.log(maxBinaryHeap.values);
maxBinaryHeap.insert(55);
console.log(maxBinaryHeap.values);
