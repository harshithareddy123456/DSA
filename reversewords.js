const string = "this is    harshitha";

const reversewords = (str) => {
  let strarr = str.split(" ");
  console.log(strarr);
  let finalstr = "";
  while (strarr.length > 0) {
    let word = strarr.pop();
    if (word) {
      finalstr = finalstr + " " + word;
    }
  }
  return finalstr.trim();
};

console.log(reversewords(string));
