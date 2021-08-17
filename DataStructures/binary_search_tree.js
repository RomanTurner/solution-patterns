class Node {
  constructor(val) {
    this.value = val;
    this.frequency = 0;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) {
          current.frequency++;
          return this;
        }
        if (val < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  recursiveInsert(value) {
    function check(node) {
      if (node.value === value) {
        node.frequency++;
        return;
      }
      if (node.value > value) check((node.left = node.left || new Node(value)));
      if (node.value < value)
        check((node.right = node.right || new Node(value)));
    }
    check((this.root = this.root || new Node(value)));
    return this;
  }
    
  find(value) {
    function search(node) {
      if (node === null || node.value === value) return node;
      if (node.value < value) return search(node.right);
      return search(node.left);
    }
    return search(this.root);
  }
}

const tree = new BinarySearchTree();
let testNode = new Node(20);

tree.recursiveInsert(15);
tree.recursiveInsert(15);
tree.recursiveInsert(20);
tree.recursiveInsert(20);
tree.recursiveInsert(20);
tree.recursiveInsert(7);
tree.recursiveInsert(9);
tree.recursiveInsert(55);
tree.recursiveInsert(21);
tree.recursiveInsert(37);
tree.recursiveInsert(45);
tree.recursiveInsert(67);
console.log(tree.recursiveInsert(7));
console.log(tree.find(67));
console.log(JSON.stringify(tree));
