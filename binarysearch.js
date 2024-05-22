//sqrt of number
1, 35;
18;
1, 17;
9;
1, 8;
4;
5, 8;
6;
5, 7;
5, 6, 7;
6;

const binarysearch = (num) => {
  let start = 1;
  let end = num;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (end === start) {
      return middle;
    }
    if (middle * middle > num) {
      end = middle - 1;
    }
    if (middle * middle < num) {
      start = middle + 1;
    }
  }
};

console.log(binarysearch(35));
