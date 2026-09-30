// 1. Check number
let number = prompt("Enter any integer number");

if (number > 7) {
    console.log("Hello");
}


// 2. Check name
let name = prompt("Enter you name");

if (name === "John") {
    console.log("Hello, John");
} else {
    console.log("There is no such name");
}


// 3. Find multiples of 3
let numbers = [1, 3, 5, 6, 9, 10, 12, 14, 18];

for (let number of numbers) {
    if (number % 3 === 0) {
        console.log(number);
    }
}