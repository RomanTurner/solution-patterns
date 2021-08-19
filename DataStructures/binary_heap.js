/* 

*** Heaps ***
• A binary heap is as compact as possible. All the children of each
node are as full as they can be 
• Left side is filled out first
• Used for priority queues

***  Max  ***
• Each parent has at most two child nodes 
• The value of each parent node is always grater than its child nodes
• Siblings have no size order

***  Min  ***
• Children must be larger than their parent
• Siblings have no size order
• Each parent has at most two child nodes 


Storing in Array
For any index of an array n
The left child is stored at 2n + 1
The right child is stored at 2n + 2

Conversely, to find a child use Math.floor((n-1)/2)

*/
class MaxHeap {
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
  bubble(index) {
    let currentIndex = index,
      parentIndex = this.parent(currentIndex);
    while (
      currentIndex > 0 &&
      this.values[currentIndex] > this.values[parentIndex]
    ) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }
  sink(index) {
    //if the node at index has children
    if (!this.isLeaf(index)) {
      //get indices of children
      let leftChildIndex = this.leftChild(index),
        rightChildIndex = this.rightChild(index),
        //start out largest index at parent index
        largestIndex = index;
      //check left
      if (this.values[leftChildIndex] > this.values[largestIndex]) {
        largestIndex = leftChildIndex;
      }
      //check right
      if (this.values[rightChildIndex] >= this.values[largestIndex]) {
        largestIndex = rightChildIndex;
      }
      //if the largest is not the parent
      if (largestIndex !== index) {
        this.swap(index, largestIndex);
        this.sink(largestIndex);
      }
    }
  }
  add(element) {
    this.values.push(element);
    this.bubble(this.values.length - 1);
    return this;
  }
  extractMax() {
    if (this.values.length < 1) return null;
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sink(0);
    return max;
  }
  buildHeap(array) {
    this.values = array;
    // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
    for (let i = Math.floor(this.values.length / 2); i >= 0; i++) {
      this.sink(i);
    }
  }
  peek() {
    return this.values[0];
  }
  print() {
    let i = 0;
    while (!this.isLeaf(i)) {
      i++;
      return {
        Parent: this.values[i],
        Left: this.values[this.leftChild(i)],
        Right: this.values[this.rightChild(i)],
      };
    }
  }
}

const maxHeap = new MaxHeap();
console.log(maxHeap.add(14));
console.log(maxHeap.add(7));
console.log(maxHeap.add(32));
//maxHeap.buildHeap([34, 54, 23, 17, 9, 88, 44]);
console.log(maxHeap.print());
