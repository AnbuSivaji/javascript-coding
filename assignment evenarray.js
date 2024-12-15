const arr = [1, 31, 5, 2, 10, 7];

// Filtering out even numbers and calculating the sum
const sumEven = arr
  .filter((num) => num % 2 === 0) // Filter even numbers
  .reduce((acc, num) => acc + num, 0); // Sum the even numbers

// Output the result
console.log(sumEven);
