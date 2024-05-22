let nums = [1, 2, 3, 4, 5, 6, 7, 0];
let target = 0;
//if target exists return index or return -1
const linearsearch = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      return i;
    }
  }
  return -1;
};

console.log(linearsearch(nums, target));
