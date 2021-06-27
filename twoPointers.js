let twoSumTwoPointers = (array, target) => {
  // initializing i and j to point at the first and last elements respectively
  let left = 0;
  let right = array.length - 1;

  // Continue looping until our base condition is met
  while (array[left] + array[right] !== target) {
    // Increment i (i.e. increase array[i]'s value) if the sum is less than the target
    if (array[left] + array[right] < target) {
      left++;
    }
    // Decrement j (i.e. decrease array[j]'s value) if the sum is greater than the target
    if (array[left] + array[right] > target) {
      right--;
    }
    // Returning false if i >= j (i.e. no solution possible w/given parameters)
    if (left >= right) return false;
  }

  // This code will be reached only when our base condition is satisfied
  return [left, right];
};
//two pointers moves either pointer based on a conditional