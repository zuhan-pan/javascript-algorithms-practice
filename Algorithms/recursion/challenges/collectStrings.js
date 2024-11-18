// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
  return Object.values(obj).reduce((acc, val) => {
    if (typeof val === 'string') acc.push(val);
    if (typeof val === 'object' && !Array.isArray(val))
      acc = acc.concat(collectStrings(val));
    return acc;
  }, []);
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};
console.log(collectStrings(obj));
// ["foo", "bar", "baz"])
