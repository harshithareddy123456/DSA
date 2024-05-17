const array = [10, 20, 1, 4, 50];

const secondlargest = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        let a = array[i];
        array[i] = array[j];
        array[j] = a;
      }
    }
  }
  return array[1];
};
console.log(secondlargest(array));

//optimised
const seclarge = (array) => {
  let largest = 0;
  let secondlargest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      secondlargest = largest;
      largest = array[i];
    } else if (array[i] > secondlargest) {
      secondlargest = array[i];
    }
  }
  return secondlargest;
};
console.log(seclarge(array));
