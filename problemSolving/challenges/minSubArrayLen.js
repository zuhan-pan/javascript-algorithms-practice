/*Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)*/

function minSubArrayLen(arr, num) {
  for (let i = 1; i < arr.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      if (maxSubarraySum(arr, i) >= num) return i;
    }
  }
  return 0;
}

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  let maxSum = 0;
  let tempSum = 0;

  // Initialize the first window sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  // Slide the window across the array
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

//I was so dumbbbbbb lol
//better approach
// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
function minSubArrayLen2(arr, num) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;

  for (let i = 0; i < arr.length; i++) {
    //window is constanly expanding to right
    sum += arr[i];

    //window shinks when the value is too big from the left
    while (sum >= num) {
      sum -= arr[left];
      //record the lenghth when the window is smallest
      minLen = Math.min(minLen, i - left + 1);
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen2([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen2([2, 1, 6, 5, 4], 9));
console.log(minSubArrayLen2([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52));
console.log(minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 39));
console.log(minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 55));
console.log(minSubArrayLen2([4, 3, 3, 8, 1, 2, 3], 11));
console.log(minSubArrayLen2([1, 4, 16, 22, 5, 7, 8, 9, 10], 95));
