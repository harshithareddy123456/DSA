const Array = [1, 2, 3, 4, 5, 6, 7, 8];
const k = 3;

const rotatefunc = (Array, k) => {
  const slicedarray = Array.splice(Array.length - k, k);
  const rotatedarray = slicedarray.concat(Array);
  return rotatedarray;
};

console.log(rotatefunc(Array, k));

//pointers method
const reverse = (arr, right, left) => {
  while (right > left) {
    let a = arr[right];
    arr[right] = arr[left];
    arr[left] = a;
    right--;
    left++;
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const rotatepointer = (arr, k) => {
  let size = arr.length;
  if (k > size) {
    k = k % size;
  } else {
    reverse(arr, size - 1, 0);
    reverse(arr, k - 1, 0);
    reverse(arr, size - 1, k);
  }
  return arr;
};

console.log(rotatepointer(arr, 3));
