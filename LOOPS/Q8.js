//  Sum of Digits
let num2 = 1234;

// For Loop
let sumDigits1 = 0;
for (let temp = num2; temp > 0; temp = Math.floor(temp / 10)) {
  sumDigits1 += temp % 10;
}
console.log("Sum of digits (for):", sumDigits1);

// While Loop
let temp4 = num2, sumDigits2 = 0;
while (temp4 > 0) {
  sumDigits2 += temp4 % 10;
  temp4 = Math.floor(temp4 / 10);
}
console.log("Sum of digits (while):", sumDigits2);

// Do...While Loop
let temp5 = num2, sumDigits3 = 0;
do {
  sumDigits3 += temp5 % 10;
  temp5 = Math.floor(temp5 / 10);
} while (temp5 > 0);
console.log("Sum of digits (do while):", sumDigits3);