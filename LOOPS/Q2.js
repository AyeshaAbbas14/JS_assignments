// Sum of First N Numbers

let n = 10;

// For Loop
let sum1 = 0;
for (let i = 1; i <= n; i++) {
  sum1 += i;
}
console.log("Sum (for):", sum1);

// While Loop
let i3 = 1, sum2 = 0;
while (i3 <= n) {
  sum2 += i3;
  i3++;
}
console.log("Sum (while):", sum2);

// Do...While Loop
let i4 = 1, sum3 = 0;
do {
  sum3 += i4;
  i4++;
} while (i4 <= n);
console.log("Sum (do while):", sum3);