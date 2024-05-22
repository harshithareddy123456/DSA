let array = [1, 2, 3, 4, 5, 6, 7, 8],
  k = 3;

const maxslidingwindow = (array, k) => {
  let final = [];
  let length = array.length;
  for (let i = 0; i <= length - k; i++) {
    let max = array[i];
    for (let j = 1; j < k; j++) {
      if (array[j + i] > max) {
        max = array[j + i];
      }
    }
    final.push(max);
  }
  return final;
};

console.log(maxslidingwindow(array, k));

//do sliding window using dequeue
