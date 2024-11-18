// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// The exercise intends for you to create a new object with the numbers converted to strings, and not modify the original. Keep the original object unchanged.

function stringifyNumbers(obj) {
  return Object.entries(obj).reduce((acc, [key, val]) => {
    if (typeof val === 'number')
      // Convert numbers to strings
      acc[key] = val.toString();
    else if (typeof val === 'object' && !Array.isArray(val))
      // Recursively process nested objects
      acc[key] = stringifyNumbers(val);
    // For other types, copy the value as is
    else acc[key] = val;

    return acc;
  }, {});
}

let obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj1));

//{
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
