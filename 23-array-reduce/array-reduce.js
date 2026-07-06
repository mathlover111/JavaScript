const cart = [
  { name: "手機殼", price: 600 },
  { name: "保護貼", price: 200 },
  { name: "快充線", price: 400}
];

const totalPrice = cart.reduce((accumulator, currentItem) => {
  return accumulator + currentItem.price;
}, 0);

console.log(totalPrice);