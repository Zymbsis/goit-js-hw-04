function isEnoughCapacity(products, containerSize) {
  const quantity = Object.values(products).reduce((a, b) => a + b);
  return quantity <= containerSize;
}

// function isEnoughCapacity(products, containerSize) {
//   let total = 0;
//   for (const item of Object.values(products)) {
//     total += item;
//   }
//   return total <= containerSize;
// }

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
