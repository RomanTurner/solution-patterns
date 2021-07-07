//takes a string, returns reversed
function reverse(string) {
  return string.length <= 1 ? string : reverse(string.slice(1)) + string[0];
}

console.log(reverse("blarg"));
