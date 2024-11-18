function factorial(num) {
  total = 1;
  for (let i = num; i > 1; i--) total *= i;
  return total;
}

function factorial2(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial2(5));
