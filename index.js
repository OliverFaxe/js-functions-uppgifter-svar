// // ## 1 ## LEVEL EASY
// function greet() {
//   console.log("Hello World!");
// }
// // <= greet()
// // => "Hello World!"

// // ## 2 ##
// function favoriteNumber() {
//   let x = prompt("What is your favorite number?");

//   console.log(`${x} is your favorite number`);
// }
// // <= favoriteNumber()
// // => prompt then x is your favorite number

// // ## 3 ##
// function magicEightBall() {
//   const magicAnswers = ["Yes", "No", "Maybe", "Probably"];

//   prompt("Ask the Magic 8-ball a question");
//   let index = Math.floor(Math.random() * magicAnswers.length);
//   console.log(magicAnswers[index]);
// }
// // <= magicEightBall()
// // => prompt then random index position in array

// // ## 4 ##
// function GetCurrentYear() {
//   let year = new Date().getFullYear();
//   console.log(year);
// }
// // <= GetCurrentYear()
// // => 2024

// // ## 5 ##
// function TellJoke() {
//   const jokes = [
//     "Whats orange and sounds like a parrot? A carrot with a mic drop!",
//     "Why dont oysters donate to charity? Because theyre shellfish, of course!",
//     "What did the big flower say to the little one? Bud, youre really growing on me!",
//   ];

//   let i = Math.floor(Math.random() * jokes.length);
//   console.log(jokes[i]);
// }
// // => random index of jokes array same as 3. using an variable to indicate random positions inside the jokes array.

// // ## 6 ##
// function PersonalGreeting(name) {
//   console.log(`Hello, ${name}!`);
// }

// // ## 7 ##
// function add(add1, add2) {
//   let sum = add1 + add2;
//   console.log(sum);
// }

// // ## 8 ##
// function ageInMonths(age) {
//   months = age * 12;
//   console.log(months);
// }

// // ## 9 ##
// function celciusToFahrenheit(celcius) {
//   fahrenheit = (celcius * 9) / 5 + 32;
//   console.log(fahrenheit);
// }

// // ## 10 ##
// function getFullName(firstname, lastname) {
//   console.log(`Hello ${firstname} ${lastname}!`);
// }

// // ## 11 ##
// function calculateArea(length, width) {
//   return length * width;
// }

// // ## 12 ##
// function findMax(number1, number2) {
//   if (number1 > number2) {
//     console.log(number1); // Log number1 if it's larger
//   } else {
//     console.log(number2); // Log number2 (it could be larger or equal)
//   }
// }

// // ## 13 ##
// function countVowels(string) {
//   const Vowels = ["a", "e", "i", "o", "u"];
//   let vowelCount = 0;

//   for (i = 0; i < string.length; i++) {
//     if (Vowels.includes(string[i].toLowerCase())) {
//       vowelCount++;
//     }
//   }
//   console.log(vowelCount);
// }

// // ## 14 ##
// function calculateDiscount(originalprice, discount) {
//   let discountAmount = originalprice * (discount / 100);
//   let newprice = originalprice - discountAmount;

//   console.log(
//     `${discountAmount.toFixed(1)} is saved with discount below is New Price`
//   );
//   return newprice;
// }

// // ## 15 ##
// function reverseString(inputString) {
//   let stringarray = inputString.split("");
//   let reversedstringarray = stringarray.reverse();
//   let reversedtext = reversedstringarray.join("")
//   console.log(reversedtext)
// }

// ## 16 ## LEVEL INTERMEDIATE
function isPalindrome(string) {
    let stringArray = string.toLowerCase().split("");
    let reversedStringArray = stringArray.reverse().join("");

    // Compare original with reversed
    if (stringArray.join("") === reversedStringArray) {
        return true; // It's a palindrome
    } else {
        return false; // Not a palindrome
    }
}
