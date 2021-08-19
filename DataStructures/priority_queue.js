class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  leftChild(index) {
    return index * 2 + 1;
  }
  rightChild(index) {
    return index * 2 + 2;
  }
  isLeaf(index) {
    return (
      index >= Math.floor(this.values.length / 2) &&
      index <= this.values.length - 1
    );
  }
  swap(index1, index2) {
    [this.values[index1], this.values[index2]] = [
      this.values[index2],
      this.values[index1],
    ];
  }
  sink(index) {
    //if the node at index has children
    if (!this.isLeaf(index)) {
      //get the indices of children
      let leftChildIndex = this.leftChild(index),
        rightChildIndex = this.rightChild(index),
        //start out largest index at parent index
        largestIndex = index;
      //check left
      if (
        this.values[leftChildIndex].priority <
        this.values[largestIndex].priority
      ) {
        largestIndex = index;
      }
      //check right
      if (
        this.values[rightChildIndex].priority <=
        this.values[largestIndex].priority
      ) {
        largestIndex = rightChildIndex;
      }
      //if the largest is not the parent
      if (largestIndex !== index) {
        this.swap(index, largestIndex);
        this.sink(largestIndex);
      }
    }
  }
  bubble(index) {
    let currentIndex = index,
      parentIndex = this.parent(currentIndex);
    while (
      currentIndex > 0 &&
      this.values[currentIndex].priority < this.values[parentIndex].priority
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  enqueue(element, priority) {
    const newNode = new Node(element, priority);
    this.values.push(newNode);
    this.bubble(this.values.length - 1);
    return this;
  }
  dequeue() {
    if (this.values.length < 1) return null;
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sink(0);
    return max;
  }
  print() {
      let i = 0;
      let print = [];
    while (!this.isLeaf(i)) {
      i++;
      print.push({
        Parent: this.values[i],
        Left: this.values[this.leftChild(i)],
        Right: this.values[this.rightChild(i)],
      })
    }
      return print;
  }
}


const pQ = new PriorityQueue();
pQ.enqueue("blarg", 7);
pQ.enqueue("smooopy", 5);
pQ.enqueue("turgis", 3);
pQ.enqueue("slog", 4);
pQ.enqueue("murek", 8);
pQ.enqueue("linkly", 1);
console.log(pQ.dequeue());
console.log(pQ.dequeue());
console.log(pQ.dequeue());
console.log(pQ.values);
console.log(pQ.print());
