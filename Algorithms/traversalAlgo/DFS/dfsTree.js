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
