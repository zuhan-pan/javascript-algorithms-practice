function quickSort(arr, startIdx = 0, endIdx = arr.length - 1) {
  if (startIdx < endIdx) {
    const pivotIdx = pivot(arr, startIdx, endIdx); // Partition the array
    quickSort(arr, startIdx, pivotIdx - 1); // Recursively sort the left subarray
    quickSort(arr, pivotIdx + 1, endIdx); // Recursively sort the right subarray
  }
  return arr; // Return the sorted array
}

function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
  let pivotIdx = startIdx;
  let pivot = arr[startIdx];

  for (let i = startIdx + 1; i < endIdx + 1; i++) {
    if (arr[i] < pivot) {
      //move to the left
      pivotIdx++;
      [arr[pivotIdx], arr[i]] = [arr[i], arr[pivotIdx]];
    }
  }

  [arr[pivotIdx], arr[startIdx]] = [arr[startIdx], arr[pivotIdx]];
  return pivotIdx;
}

// my solution, less elegent because it creates an new array
// function quickSort(arr) {
//     if (arr.length <= 1) return arr;
//     const pivotIdx = pivot(arr);
//     const left = quickSort(arr.slice(0, pivotIdx));
//     const right = quickSort(arr.slice(pivotIdx + 1));
//     return [...left, arr[pivotIdx], ...right];
//   }
