`use strict`;

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));

function findNumber(start, end, divisor) {
  let number = 0;
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }
}

console.log(findNumber(2, 6, 5));
