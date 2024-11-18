/* Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  const frequency1 = {};

  if (str1.length !== str2.length) return false;

  for (const char of str1) frequency1[char] = ++frequency1[char] || 1;

  for (const char of str2) {
    if (!frequency1[char]) return false;
    else frequency1[char]--;
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
