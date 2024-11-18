// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  let newArr = [];
  function capitalizeFirstHelper(arr) {
    if (arr.length === 0) return newArr;
    let firstEl = arr[0];
    newArr.push(firstEl[0].toUpperCase() + firstEl.slice(1));
    return capitalizeFirstHelper(arr.slice(1));
  }
  capitalizeFirstHelper(arr);
  return newArr;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']);

//another solution
function capitalizeFirst(arr) {
  if (arr.length === 0) return []; // Base case: return an empty array when input is empty

  let firstEl = arr[0];
  // Capitalize the first element and recursively process the rest
  return [
    firstEl[0].toUpperCase() + firstEl.slice(1),
    ...capitalizeFirst(arr.slice(1)),
  ];
}
