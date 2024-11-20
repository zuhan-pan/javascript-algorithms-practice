class Node {
  constructor(val) {
    this.value = val;
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
    if (!root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    if (val === current.val) return undefined;
    while (true) {
      if (val > current.val) {
        if (current.right) current = current.right;
        else {
          current.right = current;
          return this;
        }
      }
      if (current.left) current = current.left;
      else {
        current.left = current;
        return this;
      }
    }
  }

  find(val) {
    if (!this.root) return null;
    if (this.root.val === val) return this.root;
    let current = this.root;
    while (current) {
      if (val > current.val) current = current.right;
      else if (val > current.val) current = current.left;
      else return current;
    }
    return undefined;
  }

  traveral() {}
}
