function gotolunch(person) {
  if (person === 5) return true;
  console.log(person);
  return gotolunch(person + 1);
}

console.log(gotolunch(1));

function multiply(arr) {
  if (arr.length <= 0) {
    return 1;
  }
  return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
}

console.log(multiply([1, 2, 3, 4]));

//factorial
const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(4));

//rangeofnumber
function rangeOfnumbers(start, end) {
  if (start > end) {
    return [];
  }
  return [start].concat(rangeOfnumbers(start + 1, end));
}

console.log(rangeOfnumbers(1, 5));

//palindrome

function palindrome(num) {
  let str = num.toString();
  function helper(s) {
    if (s.length <= 1) {
      return true;
    }
    if (s[0] !== s[s.length - 1]) {
      return false;
    }
    return helper(s.slice(1, -1));
  }
  return helper(str);
}

console.log(palindrome(1221));

//fibonnaci
function recursion(n) {
  if (n <= 1) {
    return n;
  }
  return recursion(n - 1) + recursion(n - 2);
}
console.log(recursion(5));

function recur(n) {
  if (n === 2) {
    return [0, 1];
  } else {
    let series = recur(n - 1);
    series.push(series[series.length - 1] + series[series.length - 2]);
    return series;
  }
}
console.log(recur(5));

//reverse a string
function reversestring(str) {
  if (str.length === 1) {
    return str;
  }

  return (
    str[str.length - 1] +
    reversestring(
      str
        .split("")
        .slice(0, str.length - 1)
        .join("")
    )
  );
}

console.log(reversestring("hello"));

//backtracking algorithm
