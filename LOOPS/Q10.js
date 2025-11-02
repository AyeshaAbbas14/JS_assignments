// Fibonacci Series
let terms = 10;

// For Loop
let a1 = 0, b1 = 1;
console.log("Fibonacci (for):");
console.log(a1);
console.log(b1);
for (let i = 2; i < terms; i++) {
  let next = a1 + b1;
  console.log(next);
  a1 = b1;
  b1 = next;
}

// While Loop
let a2 = 0, b2 = 1, i11 = 2;
console.log("Fibonacci (while):");
console.log(a2);
console.log(b2);
while (i11 < terms) {
  let next = a2 + b2;
  console.log(next);
  a2 = b2;
  b2 = next;
  i11++;
}

// Do...While Loop
let a3 = 0, b3 = 1, i12 = 2;
console.log("Fibonacci (do while):");
console.log(a3);
console.log(b3);
do {
  let next = a3 + b3;
  console.log(next);
  a3 = b3;
  b3 = next;
  i12++;
} while (i12 < terms);
