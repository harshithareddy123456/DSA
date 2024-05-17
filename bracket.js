/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let sarr = s.split("");
  for (let i = 0; i < sarr.length; i = i + 2) {
    if (
      (sarr[i] === "(" && sarr[i + 1] === ")") ||
      (sarr[i] === "{" && sarr[i + 1] === "}") ||
      (sarr[i] === "[" && sarr[i + 1] === "]")
    ) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isValid("()"));
