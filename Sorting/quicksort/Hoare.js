const partitionHoare = (array, low, high) => {
  //  For this example, the the last element in the array will function as our pivot
  let pivot = array[high];
  let i = low - 1;
  let j = high;

  // Loop the following procedure until i is greater than or equal to j
  while (i < j) {
    /** Increment i (the left pointer) until an element larger than
     * the pivot is found.
     */
    do {
      i++;
    } while (array[i] <= pivot);
    /** Decrement j (the right pointer) until an element less than
     * the pivot is found.
     */
    do {
      j--;
    } while (array[j] > pivot);
    /** As long as i and j have not crossed over one another, i points
     * to an element LARGER than the pivot and j points to an element SMALLER
     * thank the pivot. Therefore, once we swap those elements for each other
     * we know they are on the correct side of where the pivot should be located
     */
    if (i < j) {
      swap(array, i, j);
    }
  }
  /** This code reached only when i and j have crossed.
   *
   * When i and j have crossed, we know that all elements to the left of i
   * are less than the pivot (meaning array[i] MUST be greater than or equal
   * to the pivot). Since we're moving our pivot to the end of the array
   * before partitioning, we swap the i with the pivot (array[high]). The pivot
   * is now in its final sorted position.
   *
   * We return the partitioning index, which we can use to recursively sort the
   * remaining partitions on either side of the pivot.
   */
  swap(array, i, high);
  return i;
};

const quickSortHoare = (array, low, high) => {
  if (low < hi) {
    // Choosing a random element within the provided range to be the pivot.
    let pivotIndex = Math.floor(Math.random() * (high - low)) + low;
    // Move the pivot to the end of the array.
    swap(array, high, pivotIndex);
    /**  Call our partitioning function, which returns the partition index or pi.
     * pi is equal to the final sorted index of our selected pivot. We then recursively
     * sort the partitions on either side of
     */
    let pi = partitionHoare(array, low, high);
    quickSortHoare(array, low, pi);
    quickSortHoare(array, p + 1, high);
  }
};

const swap = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
