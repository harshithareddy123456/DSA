//creating an array
const newarray = new Array();

//newarray with specific length
[...new Array(5)].map((_, index) => {
  console.log(index);
});

//array with specified elements
const newarray2 = new Array(1, 2, 3, 4, 5);

console.log(newarray, newarray2);

//mixed items
const mixedarray = new Array(1, true, "hello");
console.log(mixedarray);

//difference between set and array
//array allows duplicates and has to be accessed using indexing
//set doesnt allow duplicates and only existence of the elements can be checked

const newset = new Set([1, 2, 1]);
console.log(newset);
const sethas = newset.has(1);
console.log(sethas);
