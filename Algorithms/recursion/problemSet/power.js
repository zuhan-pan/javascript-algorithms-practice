// power
// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

//recursive
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

//test
console.log(power(100, 0)); //1
console.log(power(2, 3)); //8
console.log(power(5, 2)); // 25

//iterative
function power2(base, exponent) {
  let total = 1;
  for (let i = exponent; i > 0; i--) total *= base;
  return total;
}

//test
console.log(power2(100, 0)); //1
console.log(power2(2, 3)); //8
console.log(power2(5, 2)); // 25
