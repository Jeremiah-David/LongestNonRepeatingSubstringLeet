s = "aab";

var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) {
    return s.length;
  }
  if (s.length === 2 && s[0] !== s[1]) {
    return s.length;
  }
  let bigSlice = " ";
  let nextMatch = null;
  for (let i = 0; i < s.length; i++) {
    let currentSlice = s.slice(i, s.indexOf(s[i], i + 1));
    console.log(currentSlice, "First Current Slice");
    for (let j = 0; j < currentSlice.length; j++) {
      console.log(currentSlice[j], "currentSlice[j]");
      console.log(
        currentSlice.indexOf(currentSlice[j], j + 1),
        "currentSlice.indexOf(currentSlice[j], j + 1) "
      );
      if (currentSlice.indexOf(currentSlice[j], j + 1) !== -1) {
        console.log("Going to slice!");
        console.log("hit!");
        console.log(
          currentSlice.indexOf(currentSlice[j], j + 1),
          "currentSlice.indexOf(currentSlice[j] + 1) hitasdfasdfasdf"
        );

        currentSlice = currentSlice.slice(
          0,
          currentSlice.indexOf(currentSlice[j], j + 1)
        );
      }
    }
    if (bigSlice.length < currentSlice.length) {
      bigSlice = currentSlice;
    }
  }
  console.log(bigSlice.length, "bigSlice.length");
  console.log(bigSlice, "bigSlice");
  return bigSlice.length;
};

console.log(lengthOfLongestSubstring(s));

// console.log(lengthOfLongestSubstring(s));
