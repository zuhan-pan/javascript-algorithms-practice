//Write a function whick takes in a string and returns counts of each character in the string

// charCount('aaaa');
//{a: 4}

// chartCount('hello');
/* {
    h: 1,
    e: 1,
    l: 2,
    o: 1
}*/

//return an object
//properties are lowercase alphanumerically; vlaues should be the counts for each charactor

//loop over the string, for each charactor
//if char is a (number/letter AND in object), add one to count
//if the char is a (number/letter AND not in object), add it and set value to 1
//if the char is something else (space, period, etc.) don't do anything

function charCount(str) {
  const obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) obj[char] = ++obj[char] || 1;
  }
  return obj;
}

//test
console.log(charCount('aaaa'));
console.log(charCount('hello'));
console.log(charCount('Your PIN is 3465879623894'));
