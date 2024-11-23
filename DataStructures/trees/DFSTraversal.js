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

  traverse() {
    let visted = [];
    function traverse_helper(node) {
      //change order to be preorder inorder and postorder
      visted.push(node.val);
      if (node.left) traverse_helper(node.left);
      if (node.right) traverse_helper(node.right);
    }
    traverse_helper(this.root);
    return visted;
  }
}

const tree = new BinarySearchTree();
tree.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);

console.log(tree);
console.log(tree.traverse());
