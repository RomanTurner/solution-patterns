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

class MaxBinaryHeap {
  constructor() {
    this.values = [55, 39, 41, 18, 27, 12, 33];
  }
  swap(indx1, indx2) {
    return ([this.values[indx2], this.values[indx1]] = [
      this.values[indx1],
      this.values[indx2],
    ]);
  }
  findParent(index) {
    return Math.floor((index - 1) / 2);
  }

  bubble() {
    if (this.values.length > 1) {
      let currentIndex = this.values.length - 1;
      let parentIndex = this.findParent(currentIndex);
      let element = this.values[currentIndex];
      let parent = this.values[parentIndex];

      while (currentIndex > 0 && parent < element) {
        this.swap(currentIndex, parentIndex);
        currentIndex = this.findParent(currentIndex);
        parentIndex = this.findParent(currentIndex);
        parent = this.values[parentIndex];
        element = this.values[currentIndex];
      }
    }
  }

  insert(value) {
    this.values.push(value);
    return this.bubble();
  }

  sink() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftIndex = 2 * index + 1;
      let rightIndex = 2 * index + 2;
      let left, right;
      let swaps = null;
      if (leftIndex < length) {
        left = this.values[leftIndex];
        if (left > element) {
          swaps = leftIndex;
        }
      }
      if (rightIndex < length) {
        right = this.values[rightIndex];
        if (
          (swaps === null && right > element) ||
          (swaps !== null && right > left)
        ) {
          swaps = rightIndex;
        }
      }
      if (swaps === null) break;
      this.swap(index, swaps);
      index = swaps;
    }
  }
  isEmpty() {
    return !this.values.length > 0;
  }
  extractMax() {
    if (this.isEmpty()) return null;
    this.swap(this.values.length - 1, 0);
    let result = this.values.pop();
    this.sink();
    return result;
  }
}

const maxHeap = new MaxBinaryHeap();
maxHeap.insert(65);
maxHeap.insert(48);
maxHeap.insert(32);
console.log(maxHeap);
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
console.log(maxHeap);

class MaxHeapTwo {
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
}
