// Input: (s = "anagram"), (t = "nagaram");
// Output: true;

let s = "anagram";
let t = "nagaram";

let sortedt = t.split("").sort().join("");
let sorteds = s.split("").sort().join("");
if (sorteds === sortedt) {
  console.log(true);
} else {
  console.log(true);
}

function anagram(s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(anagram(s, t));
