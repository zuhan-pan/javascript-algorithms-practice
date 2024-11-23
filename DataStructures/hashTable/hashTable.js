//Seperate Chaining
//store two in the same place

//Linear Probing
//look for the next empty slot

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // Add key-value pair to the hash table (handle collisions by chaining)
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) return undefined;

    // Iterate through the bucket to find the key
    for (let el of bucket) {
      if (el[0] === key) return el[1];
    }
    return undefined; // Key not found
  }

  values() {
    let valuesArr = [];
    for (let el of this.keyMap) {
      if (el) {
        for (let subEl of el) {
          if (!valuesArr.includes(subEl[1])) valuesArr.push(subEl[1]);
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let el of this.keyMap) {
      if (el) {
        for (let subEl of el) {
          if (!keysArr.includes(subEl[1])) valuesArr.push(subEl[0]);
        }
      }
    }
    return keysArr;
  }
}
