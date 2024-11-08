function discount(sale) {
  return function (price) {
    return price - (price / 100) * sale;
  };
}
const result = discount(30);
console.log(result(100000));

console.log(9);
console.log(9);
console.log(9);
console.log(9);
console.log(9);
console.log(9);

