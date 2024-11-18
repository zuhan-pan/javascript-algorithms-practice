//capitalizeWords
//Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
function capitalizeWords(arr) {
  if (arr.length === 0) return [];
  return [arr[0].toUpperCase(), ...capitalizeWords(arr.slice(1))];
}
// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

//test
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));
