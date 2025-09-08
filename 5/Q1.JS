// Get two numbers from user input
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

// Check if inputs are valid numbers
if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
} else {
    // Perform arithmetic operations
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;
    let quotient = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    
    // Display results
    console.log("=== Arithmetic Operations ===");
    console.log("First Number: " + num1);
    console.log("Second Number: " + num2);
    console.log("Sum: " + sum);
    console.log("Difference: " + difference);
    console.log("Product: " + product);
    console.log("Quotient: " + quotient);
    
    // Alternative: Display results using alert
    let results = `
    Arithmetic Operations Results:
    
    First Number: ${num1}
    Second Number: ${num2}
    Sum: ${sum}
    Difference: ${difference}
    Product: ${product}
    Quotient: ${quotient}
    `;
    
    alert(results);
}