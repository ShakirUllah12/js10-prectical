// task 1 
function printDayOfWeek(dayNumber) {
    let day;
    switch(dayNumber) {
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3:
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday";
            break;
        case 5:
            day = "Thursday";
            break;
        case 6:
            day = "Friday";
            break;
        case 7:
            day = "Saturday";
            break;
        default:
            day = "Invalid day number";
    }
    console.log(day);
}

// Taak  2
function getMonthName(monthNumber) {
    let monthName;
  
    switch (monthNumber) {
      case 1:
        monthName = "January";
        break;
      case 2:
        monthName = "February";
        break;
      case 3:
        monthName = "March";
        break;
      case 4:
        monthName = "April";
        break;
      case 5:
        monthName = "May";
        break;
      case 6:
        monthName = "June";
        break;
      case 7:
        monthName = "July";
        break;
      case 8:
        monthName = "August";
        break;
      case 9:
        monthName = "September";
        break;
      case 10:
        monthName = "October";
        break;
      case 11:
        monthName = "November";
        break;
      case 12:
        monthName = "December";
        break;
      default:
        monthName = "Invalid month number";
        break;
    }
  
    console.log(monthName);
  }
//   Task 3
function determineVehicleType(vehicle) {
    let vehicleType;
  
    switch (vehicle.toLowerCase()) {
      case 'car':
        vehicleType = 'Four-wheeled motor vehicle';
        break;
      case 'truck':
        vehicleType = 'Large motor vehicle for transporting goods';
        break;
      case 'motorcycle':
        vehicleType = 'Two-wheeled motor vehicle';
        break;
      case 'bicycle':
        vehicleType = 'Two-wheeled pedal vehicle';
        break;
      case 'bus':
        vehicleType = 'Large motor vehicle for carrying passengers';
        break;
      case 'van':
        vehicleType = 'Medium-sized motor vehicle for transporting goods or people';
        break;
      case 'scooter':
        vehicleType = 'Small two-wheeled motor vehicle';
        break;
      case 'boat':
        vehicleType = 'Watercraft for traveling on water';
        break;
      default:
        vehicleType = 'Unknown vehicle type';
        break;
    }
  
    return vehicleType;
  }
//   Task 4
function calculateShippingCost(weight) {
    let cost;
  
    switch (true) {
      case (weight >= 0 && weight <= 10):
        cost = 5.00; // Cost for packages weighing 0-10 pounds
        break;
      case (weight > 10 && weight <= 20):
        cost = 10.00; // Cost for packages weighing 11-20 pounds
        break;
      case (weight > 20 && weight <= 30):
        cost = 15.00; // Cost for packages weighing 21-30 pounds
        break;
      case (weight > 30 && weight <= 40):
        cost = 20.00; // Cost for packages weighing 31-40 pounds
        break;
      default:
        cost = "Weight out of range"; // Handle weights outside the defined ranges
        break;
    }
  
    return cost;
  }
//   Task 5 
function determineGrade(score) {
    let grade;
  
    switch (true) {
      case score >= 90 && score <= 100:
        grade = 'A';
        break;
      case score >= 80 && score < 90:
        grade = 'B';
        break;
      case score >= 70 && score < 80:
        grade = 'C';
        break;
      case score >= 60 && score < 70:
        grade = 'D';
        break;
      case score >= 0 && score < 60:
        grade = 'F';
        break;
      default:
        grade = 'Invalid score';
    }
  
    return grade;
  }
//   while loop
// task 8
let num1 = 0;
let num2 = 1;
let count = 0;
let maxCount = 10;

console.log(num1); // Print the first number
console.log(num2); // Print the second number

while (count < maxCount - 2) {
    let nextNum = num1 + num2;
    console.log(nextNum);

    num1 = num2;
    num2 = nextNum;

    count++;

    // Task 9
    // Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess = 0;

// While loop for the guessing game
while (guess !== randomNumber) {
  // Prompt the user for their guess
  guess = parseInt(prompt("Guess a number between 1 and 100: "));

  // Check if the guess is correct, too low, or too high
  if (guess < randomNumber) {
    console.log("Too low! Try again.");
  } else if (guess > randomNumber) {
    console.log("Too high! Try again.");
  } else if (guess === randomNumber) {
    console.log("Congratulations! You guessed the correct number.");
  }
}

console.log("Game over. The correct number was " + randomNumber + ".");

// Task 10 
function reverseString(str) {
    let reversedStr = "";
    let index = str.length - 1;
  
    while (index >= 0) {
      reversedStr += str[index];
      index--;
    }
  
    return reversedStr;
  }
  
  // Example usage:
  const inputString = "Hello, world!";
  const reversed = reverseString(inputString);
  console.log("Original String:", inputString);
  console.log("Reversed String:", reversed);

  Task 11
  let num = 2; // Start from the first prime number
const primes = [];

while (num <= 100) {
  let isPrime = true;

  // Check if num is divisible by any number from 2 to its square root
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  // If isPrime is still true, num is a prime number
  if (isPrime) {
    primes.push(num);
  }

  num++;
}

console.log("Prime numbers between 1 and 100:", primes);

// Task 12
// Function to calculate the power of a given number
function calculatePower(base, exponent) {
    let result = 1;
    let count = 0;

    // Use a while loop to multiply the base by itself 'exponent' times
    while (count < exponent) {
        result *= base;
        count++;
    }

    return result;
}

// Example usage
const base = 2;
const exponent = 3;
const power = calculatePower(base, exponent);

console.log(`${base}^${exponent} = ${power}`);

// Task 13

  

// do while loop 
// task 1 
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 10);
// task 2 
let num = 1;
let sum = 0;
do {
    sum += num;
    num++;
} while (num <= 10);
console.log('Sum:', sum);
// task 3
const prompt = require('prompt-sync')(); // Use this for Node.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
do {
    guess = parseInt(prompt('Guess a number between 1 and 100: '), 10);
    if (guess > randomNumber) {
        console.log('Too high!');
    } else if (guess < randomNumber) {
        console.log('Too low!');
    } else {
        console.log('Congratulations! You guessed the number!');
    }
} while (guess !== randomNumber);
// task 4


const number = 5; // Change this to calculate factorial of any number
let factorial = 1;
let i = 1;
do {
    factorial *= i;
    i++;
} while (i <= number);
console.log('Factorial of', number, 'is', factorial);
// task 5
const number = 5; // Change this to print multiplication table for any number
let i = 1;
do {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
} while (i <= 10);