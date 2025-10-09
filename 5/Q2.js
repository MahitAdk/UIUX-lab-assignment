// Create an array of 5 numbers
let numbers = [45, 12, 89, 3, 67];

console.log('Original array: ' + numbers);

// Find largest number
let largest = numbers[0];
for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] > largest) {
        largest = numbers[i];
    }
}

// Find smallest number
let smallest = numbers[0];
for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log('Largest number: ' + largest);
console.log('Smallest number: ' + smallest);

// Sort in ascending order
let ascending = [];
for(let i = 0; i < numbers.length; i++) {
    ascending[i] = numbers[i];
}
ascending.sort();

console.log('Ascending order: ' + ascending);

// Sort in descending order  
let descending = [];
for(let i = 0; i < numbers.length; i++) {
    descending[i] = numbers[i];
}
descending.sort();
descending.reverse();

console.log('Descending order: ' + descending);