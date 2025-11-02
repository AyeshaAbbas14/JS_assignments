// Palindrome Number

let num3 = 121;

// For Loop
let reversed1 = 0;
for (let temp = num3; temp > 0; temp = Math.floor(temp / 10)) {
  reversed1 = reversed1 * 10 + (temp % 10);
}
console.log(num3 === reversed1 ? "Palindrome (for)" : "Not Palindrome (for)");

// While Loop
let temp6 = num3, reversed2 = 0;
while (temp6 > 0) {
  reversed2 = reversed2 * 10 + (temp6 % 10);
  temp6 = Math.floor(temp6 / 10);
}
console.log(num3 === reversed2 ? "Palindrome (while)" : "Not Palindrome (while)");

// Do...While Loop
let temp7 = num3, reversed3 = 0;
do {
  reversed3 = reversed3 * 10 + (temp7 % 10);
  temp7 = Math.floor(temp7 / 10);
} while (temp7 > 0);
console.log(num3 === reversed3 ? "Palindrome (do while)" : "Not Palindrome (do while)");