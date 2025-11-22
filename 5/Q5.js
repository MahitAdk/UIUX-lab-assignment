// Function that processes an array of numbers
function processNumbers(numbers) {
  console.log("Original array:", numbers);
  
  // Step 1: Remove all odd numbers (keep only even numbers)
  const evenNumbers = numbers.filter(num => num % 2 === 0);
  console.log("After filtering (even numbers only):", evenNumbers);
  
  // Step 2: Multiply the remaining numbers by 2
  const doubled = evenNumbers.map(num => num * 2);
  console.log("After multiplying by 2:", doubled);
  
  // Step 3: Find the sum of the resulting numbers
  const sum = doubled.reduce((total, num) => total + num, 0);
  console.log("Sum of resulting numbers:", sum);
  
  return sum;
}

// Method chaining version (more concise)
function processNumbersChained(numbers) {
  return numbers
    .filter(num => num % 2 === 0)  // Remove odd numbers
    .map(num => num * 2)             // Multiply by 2
    .reduce((total, num) => total + num, 0);  // Sum them up
}

// Test examples
console.log("=== Example 1 ===");
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result1 = processNumbers(array1);
console.log("Final result:", result1);
console.log("\n");

console.log("=== Example 2 ===");
const array2 = [15, 20, 33, 42, 51, 60];
const result2 = processNumbers(array2);
console.log("Final result:", result2);
console.log("\n");

console.log("=== Example 3 (Using Chained Method) ===");
const array3 = [5, 10, 15, 20, 25, 30];
const result3 = processNumbersChained(array3);
console.log("Array:", array3);
console.log("Final result:", result3);
console.log("\n");

console.log("=== Example 4 (Edge Case: All Odd Numbers) ===");
const array4 = [1, 3, 5, 7, 9];
const result4 = processNumbers(array4);
console.log("Final result:", result4);