function collectOddValues1(arr) {
  let result = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

function collectOddValues2(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = [...newArr, ...collectOddValues1(arr.slice(1))];
  return newArr;
}

function collectOddValues3(arr) {
  let result = [];
  for (const el of arr) {
    if (el % 2 !== 0) result.push(el);
  }
  return result;
}

//test
console.log(
  collectOddValues1([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1])
);
console.log(
  collectOddValues2([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1])
);
console.log(
  collectOddValues3([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1])
);
