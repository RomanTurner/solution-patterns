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
  iterativeFind(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    function search(node) {
      if (node === null || node.value === value) return !!node;
      if (node.value < value) return search(node.right);
      return search(node.left);
    }
    return search(this.root);
  }
  bfs() {
    let queue = [this.root];
    let results = [];
    let current = this.root;
    while (queue.length) {
      current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      results.push(current.value);
    }
    return results;
  }
  preOrder() {
    let results = [];
    function search(node) {
      results.push(node.value);
      if (node.left) search(node.left);
      if (node.right) search(node.right);
    }
    search(this.root);
    return results;
  }
  postOrder() {
    let results = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    }
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return results;
  }
}
/* 
BST methods
#contains returns t/f 
#insert places a value at the correct spot in the tree
#find returns node with the value input
_#isEmpty helper to find if it is empty
*/
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
console.log(tree.bfs());
console.log(tree.preOrder());
console.log(tree.postOrder());
console.log(tree.inOrder());
console.log(JSON.stringify(tree));
