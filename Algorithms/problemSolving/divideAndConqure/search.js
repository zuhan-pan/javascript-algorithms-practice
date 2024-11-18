function search(arr, num) {
  for (let i = 0; i < num; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

function binarySearch(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (array[middle] < val) min = middle + 1;
    else if (array[middle] < val) max = middle - 1;
    else return middle;
  }

  return -1;
}
