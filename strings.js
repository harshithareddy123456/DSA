//strings in js

//creating strings
const string = new String("harshitha");
const string1 = "Subscribe to harshitha";
const string2 = "Subscribe to hatshitha";
const string3 = `Subscribe to harshitha!
hello
from this side ${string1}`;

console.log(string, string1, string3);

console.log`harshitha`;
console.log`harshitha ${"loves"} food`;

//length
const length = string1.length;
console.log(length);

//accessing
console.log(string1[3]);
console.log(string1.charAt(3));

//looping
for (let i = 0; i < string1.length; i++) {
  console.log(string1[i]);
}

//modifying strings
string1[3] = "b"; //not possible ,because strings are immutable
console.log(string1.replace("s", "b"));
console.log(string1.replaceAll("h", "c"));

//concat
const s1 = "harshitha";
const s2 = s1.concat(" is a good girl");
console.log(s2);

//trim .removes leading and ending spaces
const s3 = "      harshitha is fine    ";
console.log(s3.trim());

//searching
console.log(s3.indexOf("h"));
console.log(s1.indexOf("ar"));
console.log(s3.lastIndexOf("h"));

//startswith
console.log(s1.startsWith("h"));

//endswith
console.log(s1.endsWith("a"));

//extracting substring
console.log(string1.substring(13));
console.log(string1.slice(-9, -1));

//converting to string
const num = 1;
const numstr = String(num);
console.log(numstr);
//for objects
const obj = { name: "har" };
console.log(String(obj)); //cant do
console.log(JSON.stringify(obj));
const s4 = "Harshitha";
console.log(s4.toLocaleLowerCase());
console.log(s4.toUpperCase());

//ascii value
console.log(s4.charCodeAt(0));

//checking
const s5 = "harshitha is a bad girl";
console.log(s5.includes("is"));

//splitting and joining strings
const splitstr = s5.split(" ");
console.log(splitstr);
console.log(splitstr.join(" "));
