function countUniqueValues(arr) {
  arrNew = [...arr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] = arr[j])) arrNew.splice(j, 1);
    }
  }
  return arrNew.length;
}

function countUniqueValues2(arr) {
  let i = 0;
  if (arr.length === 0) return 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) arr[++i] = arr[j];
  }
  return i + 1;
}
//test
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2, 2, 2, 3]));
console.log(countUniqueValues2([1, 1, 1, 1, 1, 1, 2, 2, 2, 3]));
