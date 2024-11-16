/* Question: Write a function called same, which accepts two arrays. The function should return true if everyvalue in the array has it's corresponding value squared in the second array. The frequency of values must be the same */

function same(arr1, arr2) {
  const arr1Squared = arr1.map(element => (element *= element));
  const object1 = freqencyRecorder(arr1Squared);
  const object2 = freqencyRecorder(arr2);
  return objectComparison(object1, object2);
}

function freqencyRecorder(arr) {
  const obj = {};
  arr.forEach(el => (obj[el] = ++obj[el] || 1));
  return obj;
}

function objectComparison(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  else return keys1.every(key => obj1[key] === obj2[key]);
}

//testing
console.log(same([1, 2, 3], [1, 9, 4]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));
