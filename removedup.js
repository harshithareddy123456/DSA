const Array = [1, 1, 2, 3, 4, 4];

const sortedarray = [...new Set(Array)];
console.log(sortedarray);

//using for

const dupfunc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    let j = i + 1;
    while (j < arr.length) {
      if (value === arr[j]) {
        arr.splice(j, 1);
      } else {
        j++;
      }
    }
  }
  return arr;
};

console.log(dupfunc(Array));
