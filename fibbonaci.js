function fibbonaci(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  console.log(arr);
}

fibbonaci(5);

function fibrec(n) {
  if (n <= 1) return n;

  return fibrec(n - 1) + fibrec(n - 2);
}
console.log(fibrec(5));
