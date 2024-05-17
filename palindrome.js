//array
let number = 123445555431;
let numstring = String(number);
let reversenum = numstring.split("").reverse().join("");
console.log(reversenum);
if (number === reversenum) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}
