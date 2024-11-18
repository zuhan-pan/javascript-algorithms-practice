function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middleIndex = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middleIndex);
  const arrRight = arr.slice(middleIndex);
  return merge(mergeSort(arrLeft), mergeSort(arrRight));
}

function merge(arr1, arr2) {
  let current1 = 0;
  let current2 = 0;
  let merged = [];

  while (current1 < arr1.length && current2 < arr2.length) {
    if (arr1[current1] < arr2[current2]) {
      merged.push(arr1[current1]);
      current1++;
    } else {
      merged.push(arr2[current2]);
      current2++;
    }
  }

  return merged.concat(arr1.slice(current1)).concat(arr2.slice(current2));
}
