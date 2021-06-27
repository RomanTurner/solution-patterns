let twoSumTwoPointers = (array, target) => {
  // initializing i and j to point at the first and last elements respectively
  let left = 0;
  let j = array.length - 1;

  // Continue looping until our base condition is met
  while (array[left] + array[j] !== target) {
    // Increment i (i.e. increase array[i]'s value) if the sum is less than the target
    if (array[left] + array[j] < target) {
      left++;
    }
    // Decrement j (i.e. decrease array[j]'s value) if the sum is greater than the target
    if (array[left] + array[j] > target) {
      j--;
    }
    // Returning false if i >= j (i.e. no solution possible w/given parameters)
    if (left >= j) return false;
  }

  // This code will be reached only when our base condition is satisfied
  return [left, j];
};
//two pointers moves either pointer based on a conditional