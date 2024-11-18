// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

//test
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));

//iterative dynamic programming
function fib2(num) {
  let arr = [1, 1];
  if (num <= 2) return 1;
  for (let i = 2; i < num; i++) {
    arr = [arr[1], arr[0] + arr[1]];
  }
  return arr[1];
}

console.log(fib2(4));
console.log(fib2(10));
console.log(fib2(28));
console.log(fib2(35));

//Use fib2 (iterative) for performance and scalability. It’s faster and uses less memory.
// Use fib (recursive) if clarity and simplicity are your priorities, and you’re working with small input sizes
