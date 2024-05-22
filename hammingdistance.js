const str1 = "hello";
const str2 = "hwlle";

const hamming = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let dist = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      dist++;
    }
  }
  return dist;
};

console.log(hamming(str1, str2));
