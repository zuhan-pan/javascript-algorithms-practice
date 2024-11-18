function sumRange(num) {
  //base case on top of the stack
  if (num === 1) return 1;
  //recursive call
  return num + sumRange(num - 1);
}

console.log(sumRange(5));

//iterative
function sumRange2(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumRange2(5));
