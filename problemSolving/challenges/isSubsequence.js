/* Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)*/
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str1.length > str2.length) return false;

  let indexLeft1 = 0;
  let indexRight1 = str1.length - 1;
  let indexLeft2 = 0;
  let indexRight2 = str2.length - 1;
  while (indexLeft2 < indexRight2) {
    if (str1[indexLeft1] === str2[indexLeft2]) indexLeft1++;
    indexLeft2++;
    if (str1[indexRight1] === str2[indexRight2]) indexRight1--;
    indexRight2--;
    if (indexLeft1 >= indexRight1) return true;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));

//better solution
function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str1.length > str2.length) return false;

  let i = 0; // Pointer for str1
  let j = 0; // Pointer for str2

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

//recursive solution
function isSubsequence3(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;

  if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
