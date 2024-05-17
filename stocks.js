//this will exceed time limit
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > max) {
        max = prices[j] - prices[i];
      }
    }
  }
  return max;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
//greedy algo
var maxprof = function (prices) {
  let min = prices[0] || 0;
  let stockprice = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      if (prices[i] - min > stockprice) {
        stockprice = prices[i] - min;
      }
    }
  }
  return stockprice;
};
console.log(maxprof([7, 1, 5, 3, 6, 4]));
