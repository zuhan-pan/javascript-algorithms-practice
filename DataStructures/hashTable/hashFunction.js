//fast
//uniform distribution (random)
//deterministic
function simpleHash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

function simpleHash2(key, arrayLen = 13) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
