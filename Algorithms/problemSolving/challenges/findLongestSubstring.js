/*Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n) */

function findLongestSubstring(str) {
  if (str.length === 0) return 0;

  let left = 0;
  let maxLen = 0;
  let tem = {};
  for (let i = 0; i < str.length; i++) {
    //shink in the window to the position of the left value
    //becasue the left value is equal to the tem value and it is in the window;
    if (tem.hasOwnProperty(str[i]) && tem[str[i]] >= left)
      left = tem[str[i]] + 1;
    //otherwise simply expand the window to the right
    tem[str[i]] = i;
    maxLen = Math.max(maxLen, i - left + 1);
  }
  return maxLen;
}

// 0
// 7
// 6
// 7
// 1
// 8
// 6
console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));
