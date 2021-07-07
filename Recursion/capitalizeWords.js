//Takes array of strings and will capitalize the string
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

function capitalizeWords(arr) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(arr.slice(0, -1));
  res.push(array.slice(arr.length - 1)[0].toUpperCase());
  return res;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
