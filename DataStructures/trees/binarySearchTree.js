class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (true) {
      if (val === current.val) return undefined;
      if (val > current.val) {
        if (current.right) current = current.right;
        else {
          current.right = newNode;
          return this;
        }
      } else {
        if (current.left) current = current.left;
        else {
          current.left = newNode;
          return this;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    let current = this.root;
    while (current) {
      if (val > current.val) current = current.right;
      else if (val < current.val) current = current.left;
      else return current;
    }
    return null;
  }

  traveral() {}
}
