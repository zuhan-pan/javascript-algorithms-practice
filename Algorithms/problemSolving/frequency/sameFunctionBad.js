function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (const el of arr1) {
    const correctIndex = arr2.indexOf(el ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
}

//testing
console.log(same([1, 2, 3], [1, 9, 4]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
