// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
  const obj1 = freqencyCounter(str1);
  const obj2 = freqencyCounter(str2);
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;
  else return keys1.every(key => obj1[key] === obj2[key]);
}

function freqencyCounter(str) {
  const obj = {};
  [...str].forEach(char => (obj[char] = ++obj[char] || 1));
  return obj;
}

//test
console.log(validAnagram('qwerty', 'qeywrt'));
validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); // false) // false
validAnagram('awesome', 'awesom'); // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true
