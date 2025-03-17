const fruits = ["Mango", "Apple", "Banana", "Pineapple", "jackfruits"];

// const arraySort = fruits.sort();
const arraySort = fruits.sort().reverse();

console.log(arraySort);

// const numbers = [500, 44, 100, 10, 35, 66, 44, 12, 34, 75, 8];

// const result = numbers.sort(function (a, b) {
//   return a - b;
//   return b - a;
//   return 0.5 - Math.random();
//   return Math.max.apply();
// });

// console.log(result);
// console.log(Math.max.apply(numbers));

// const findMaxNumber = () => {
//   return Math.max.apply();
//   console.log(Math.max(500, 44, 100, 10, 35, 66, 44, 12, 34, 75, 8));
//   console.log(Math.min(500, 44, 100, 10, 35, 66, 44, 12, 34, 75, 8));
// };

// console.log(findMaxNumber(numbers));
// findMaxNumber();

// Array Iteration
// const numbers = [500, 44, 100, 10, 35];

// console.log(numbers.sort());

// const arrayFunction = (value, indexOf, array) => {
//   console.log("value:", value);
//   console.log("index:", indexOf);
//   console.log(array);
//   console.log("==========");
// };

// numbers.forEach(arrayFunction);

// const arrayMethods = (total, value) => {
//   //   return value > 50;
//   console.log("Total:", total);

//   return total + value;
// };
// const arrayMethods = (value) => {
//   //   return value > 50;
//   //   return value > 9;
//   //   return value > 999;
//   //   return value > 40;
//   return value < 40;
// };

// const newNumbers = numbers.map(arrayMethods);
// const newNumbers = numbers.filter(arrayMethods);
// const newNumbers = numbers.reduce(arrayMethods);
// const newNumbers = numbers.reduce(arrayMethods, 11);
// const newNumbers = numbers.reduceRight(arrayMethods, 11);
// const newNumbers = numbers.every(arrayMethods);
// const newNumbers = numbers.some(arrayMethods);
// const newNumber = numbers.find(arrayMethods);

// console.log(newNumber);

// console.log(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
// console.log(Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ").length);
