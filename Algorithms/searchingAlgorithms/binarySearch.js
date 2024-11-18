function binarySearch(arr, val) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (arr[middle] === val) return middle;
    if (arr[middle] < val) low = middle + 1;
    if (arr[middle] > val) high = middle - 1;
  }
  return -1;
}
