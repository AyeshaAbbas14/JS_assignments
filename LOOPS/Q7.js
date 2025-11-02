// Count Digits in a Number
let num1 = 12345;

// For Loop
let count1 = 0;
for (let temp = num1; temp > 0; temp = Math.floor(temp / 10)) {
  count1++;
}
console.log("Digits (for):", count1);

// While Loop
let temp2 = num1, count2 = 0;
while (temp2 > 0) {
  temp2 = Math.floor(temp2 / 10);
  count2++;
}
console.log("Digits (while):", count2);

// Do...While Loop
let temp3 = num1, count3 = 0;
do {
  temp3 = Math.floor(temp3 / 10);
  count3++;
} while (temp3 > 0);
console.log("Digits (do while):", count3);