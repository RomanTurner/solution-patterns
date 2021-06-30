const partitionLamuto = (array, low, high) => {
  // Lamuto's scheme traditionally uses the last element in the array as the pivot.
  let pivot = array[high];
  // i points to the first element NOT determined to be less than the pivot
  let i = low;
  let temp;

  // Iterate through the elements from low to high
  for (let j = low; j < high; j++) {
    // If the array[j] is less than the pivot, swap array[i] and array[j]
    if (array[j] < pivot) {
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
      /* After swapping, increment i so that it points to the first element NOT 
      determined to be less than the pivot element. 
      */
      i++;
    }
  }

  /* After iterating through the provided range, swap the pivot with the 
  pivot with array[i]. The pivot is now in its final sorted position.
  We return i, which denotes the boundary between the two partitions (or 
  subarrays). Those partitions are then recursively sorted using the same method.
  */

  temp = array[i];
  array[i] = array[high];
  array[high] = temp;

  return i;
};
