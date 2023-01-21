s = "abcabcbb";

var lengthOfLongestSubstring = function (s) {
  let array = [[]];
  let stringIndex = 0;
  let arrayLength = 0;
  let arrayIndex = 0;

  while (stringIndex < s.length) {
    while (
      array[arrayIndex].indexOf(s[stringIndex]) === -1 &&
      s[stringIndex] !== undefined
    ) {
      array[arrayIndex].push(s[stringIndex]);

      stringIndex++;
    }
    if (array[arrayIndex].includes(s[stringIndex])) {
      arrayIndex++;
      array.push([]);
      // console.log(s[stringIndex], "s-stringIndex");
      // console.log(
      // s.indexOf(s[stringIndex] + 1),
      // "s.indexOf(s[stringIndex] + 1)"
      // );
      // let s = s.slice(s.indexOf(s[stringIndex]));
      let substring = s.slice(
        s.indexOf(s[stringIndex]) + 1,
        s.indexOf(s[stringIndex] + 1)
      );
      console.log(typeof s, "substring");
      // if (substring.length) {
      s = s + substring;
      // }
      // for (let i = 0; i < substring.length; i++) {
      //   array[arrayIndex].push(substring[i]);
      // }
      stringIndex++;
    }
  }
  for (let i = 0; i < array.length; i++) {
    console.log(array);
    if (array[i].length > arrayLength) {
      arrayLength = array[i].length;
    }
  }
  return arrayLength;
};

lengthOfLongestSubstring(s);

console.log(lengthOfLongestSubstring(s));
