const prices = [100, 200, 300];

const discountedPrices = prices.map((price) => {
  return price * 0.8;
});

console.log(discountedPrices);