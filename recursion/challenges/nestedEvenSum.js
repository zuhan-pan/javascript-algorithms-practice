// nestedEvenSum
// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

//
function nestedEvenSum(obj) {
  let elments = Object.values(obj);
  return elments.reduce((acc, el) => {
    if (typeof el === 'object') acc += nestedEvenSum(el);
    if (typeof el === 'number' && el % 2 === 0) acc += el;
    return acc;
  }, 0);
}

//test
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};

console.log(nestedEvenSum(obj1));
console.log(nestedEvenSum(obj2));
