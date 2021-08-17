class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head == null;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  hasOnlyOneNode() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return true;
    }
    return false;
  }

  pop() {
    if (this.isEmpty()) return null;
    const popped = this.tail;
    if (this.hasOnlyOneNode()) {
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
    }
    popped.prev = null;
    this.length--;
    return popped.val;
  }

  shift() {
    if (this.isEmpty()) return null;
    const shifted = this.head;
    if (this.hasOnlyOneNode()) {
    } else {
      this.head = this.shifted.next;
      this.head.prev = null;
    }
    shifted.next = null;
    this.length--;
    return shifted.val;
  }

  unshift(val) {
    if (this.isEmpty()) {
      return this.push(val);
    } else {
      const newNode = new Node(val);
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  printHelper() {
    const valueArray = [];
    let current = this.head;
    while (current) {
      valueArray.push(current.val);
      current = current.next;
    }
    return valueArray;
  }

  isInBounds(val) {
    return val >= 0 && val <= this.length;
  }

  get(index) {
    if (this.isInBounds(index)) {
      let half = Math.floor(this.length / 2);
      console.log({ half, index });
      if (index <= half) {
        let count = 0;
        let current = this.head;
        while (count !== index) {
          current = current.next;
          count++;
        }
        return current;
      } else {
        let count = this.length - 1;
        let current = this.tail;
        while (count !== index) {
          current = current.prev;
          count--;
        }
        return current;
      }
    } else return null;
  }

  set(val, index) {
    const targetNode = this.get(index);
    return targetNode ? !!(targetNode.val = val) : false;
  }

  insert(index, val) {
    if (this.isInBounds(index)) {
      if (index === 0) return this.unshift(val);
      if (index === this.length) return this.push(val);
      const newNode = new Node(val);
      let prev = this.get(index - 1);
      let next = prev.next;
      next.prev = newNode;
      prev.next = newNode;
      newNode.next = next;
      newNode.prev = prev;
      return newNode;
    } else {
      return null;
    }
  }

  remove(index) {
    if (this.isInBounds(index)) {
      if (index === 0) return this.shift();
      if (index === this.length - 1) return this.pop();
      const targetNode = this.get(index);
      const prev = targetNode.prev;
      const next = targetNode.next;
      prev.next = next;
      next.prev = prev;
      targetNode.prev = null;
      targetNode.next = null;
      this.length--;
      return targetNode;
    } else return null;
  }
  reverse() {
    if (this.isEmpty()) return null;
    let temp = null;
    let current = this.head;
    this.tail = this.head;
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp !== null) {
      this.head = temp.prev;
    }
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(49);
list.push("murk");
list.push(77);
list.push("flurb");
list.unshift("clob");
list.unshift("smock");
list.insert(6, "brucn");
list.remove(4);
console.log(list.reverse());
console.log({ head: list.head, tail: list.tail });
console.log(list.printHelper());