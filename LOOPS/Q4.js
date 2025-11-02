// Factorial of a Number
let num = 5;

// For Loop
let fact1 = 1;
for (let i = 1; i <= num; i++) {
  fact1 *= i;
}
console.log("Factorial (for):", fact1);

// While Loop
let i5 = 1, fact2 = 1;
while (i5 <= num) {
  fact2 *= i5;
  i5++;
}
console.log("Factorial (while):", fact2);

// Do...While Loop
let i6 = 1, fact3 = 1;
do {
  fact3 *= i6;
  i6++;
} while (i6 <= num);
console.log("Factorial (do while):", fact3);