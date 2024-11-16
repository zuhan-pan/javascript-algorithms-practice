function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let maxSum = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length - num + 1; i++) {
    for (let j = i; j < i + num; j++) sum += arr[j];
    if (sum > maxSum) maxSum = sum;
    sum = 0;
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));

function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;

  //initialization
  for (let i = 0; i < num; i++) maxSum += arr[i];
  tempSum = maxSum;

  //say hi and say bye
  //add the right and minus the left
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = tempSum > maxSum ? tempSum : maxSum;
  }

  return maxSum;
}

console.log(maxSubarraySum2([1, 2, 5, 2, 8, 1, 5], 2));
