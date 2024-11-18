/* Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1) */

//freqency counter
function areThereDuplicates(...arr) {
  if (arr.length === 0) return null;
  const freqencyCounter = {};

  for (let el of arr) {
    if (freqencyCounter[el]) return true;
    else freqencyCounter[el] = 1;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

function areThereDuplicates2(...arr) {
  if (arr.length === 0) return null;
  //sort the array first
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
}
console.log(areThereDuplicates2(1, 2, 3));
console.log(areThereDuplicates2(1, 2, 2));
console.log(areThereDuplicates2('a', 'b', 'c', 'a'));

//one line solution using set
//am not gonna do it I feel like it defeats the purpose, i feel like javascript did everything for me lol
//actually the second solution uses a merge sort at the background as well
//pretty sure we will learn later and I might come back to this instead of using the .sort method
