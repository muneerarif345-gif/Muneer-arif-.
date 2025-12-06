let char = prompt("Enter any character:");

// Check if number
if (!isNaN(char)) {
    console.log("It is a number.");
}
// Check uppercase A–Z
else if (char >= 'A' && char <= 'Z') {
    console.log("It is an uppercase letter.");
}
// Check lowercase a–z
else if (char >= 'a' && char <= 'z') {
    console.log("It is a lowercase letter.");
}
else {
    console.log("Invalid input.");
}
let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));

if (num1 > num2) {
    console.log("Larger number is: " + num1);
} 
else if (num2 > num1) {
    console.log("Larger number is: " + num2);
} 
else {
    console.log("Both numbers are equal.");
}
let num = Number(prompt("Enter a number:"));

if (num > 0) {
    console.log("The number is positive.");
} 
else if (num < 0) {
    console.log("The number is negative.");
} 
else {
    console.log("The number is zero.");
}
let ch = prompt("Enter one character:").toLowerCase();

if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
    console.log(true);
} else {
    console.log(false);
}
let correctPassword = "mySecret123";

let userPassword = prompt("Enter your password:");

if (!userPassword) {
    console.log("Please enter your password");
} 
else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} 
else {
    console.log("Incorrect password");
}
var greeting;
var hour = 13;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);
let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900):"));

if (time >= 0 && time < 1200) {
    console.log("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");
}
else {
    console.log("Invalid time format");
}
