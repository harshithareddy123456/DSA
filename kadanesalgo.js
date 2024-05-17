//max sum of subarray and subarray
const arr = [3, 4, 5, -1];

const maxsubarr = (arr) => {
  let maxsum = arr[0];
  let startindex = 0;
  let endindex = 0;
  for (let i = 0; i < arr.length; i++) {
    let subarrsum = 0;
    for (let j = i; j < arr.length; j++) {
      subarrsum = subarrsum + arr[j];
      if (subarrsum > maxsum) {
        maxsum = subarrsum;
        startindex = i;
        endindex = j;
      }
    }
  }
  return { sum: maxsum, subarr: arr.slice(startindex, endindex + 1) };
};

console.log(maxsubarr(arr));
