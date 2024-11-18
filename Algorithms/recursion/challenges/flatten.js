// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  //flatten it once and assign it to newArray
  let newArr = arr.reduce((acc, el) => acc.concat(el), []);
  //check when it is completely flatterned
  if (newArr.every(el => !Array.isArray(el))) return newArr;

  return flatten(newArr);
}

console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));

//more condesed option
function flatten2(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flatten2(val)) : acc.concat(val),
    []
  );
}
