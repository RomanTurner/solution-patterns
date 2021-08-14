/* 
Linked List
- Data structure that contains a head, tail, and length propertye.target.value
- Linked Lists consists of nodes, they hold a value and a pointer to the next node. 
*Lists
· Lists do not have indexes
· Connected via nodes and next pointer
· random access is not allowed
*Arrays
· Indexed in order
· Insertion and deletion can be expensive
· Can quickly be accessed at a specific index

*/
//· Holds piece of data - val
//· References to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//Naive node use, no list class
// const first = new Node('hi');
// first.next = new Node('there');
// · Prints {val: 'hi', next: {val: 'there', next: null}}

class singlyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  outOfBounds(index) {
    return index < 0 || index > this.length;
  }
  lastOne() {
    let lastNode = this.head;
    this.head = null;
    this.tail = null;
    this.length = 0;
    return lastNode;
  }
  empty() {
    return !this.head;
  }
  push(val) {
    const newNode = new Node(val);
    if (this.empty()) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
  pop() {
    if (this.empty()) return undefined;
    if (this.length === 1) {
      return this.lastOne();
    }
    let temp = this.head;
    let pre;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    pre.next = null;
    this.tail = pre;
    this.length -= 1;
    return temp;
  }
  unshift(val) {
    let newHead = new Node(val);
    if (this.empty()) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.empty()) return undefined;
    if (this.length === 1) {
      return this.lastOne();
    }
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    return oldHead;
  }

  get(index) {
    if (this.outOfBounds()) return null;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, val) {
    const node = this.get(index);
    if (node) {
      node.val = val;
      return node;
    }
    return null;
  }
  insert(index, val) {
    if (this.outOfBounds()) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const pre = this.get(index - 1);
    newNode.next = pre.next;
    pre.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (this.outOfBounds()) return false;
    if (index) if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    const pre = this.get(index - 1);
    const removed = pre.next;
    pre.next = removed.next;
    this.length--;
    return removed.val;
  }
  reverse() {
    if (this.empty()) return this;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let pre = null,
      next = null;

    while (node !== null) {
      next = node.next;
      node.next = pre;
      pre = node;
      node = next;
    }
    console.log(this.print());
  }
    recursiveReverse() {
      
  }
}

const list = new singlyLinkedList();
list.push("blarg");
list.push("dorg");
list.push("porj");
list.push("delete me");
list.pop();
console.log(list.empty());
list.unshift("Pleeb");
list.unshift("delete me");
list.shift();
console.log(list.length);
console.log(list.get(0));
console.log(list.set(0, "PLONK"));
console.log(list.get(0));
list.reverse();
console.log(list.reverseRecursively());