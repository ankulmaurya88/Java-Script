// calculator.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

const a = parseFloat(process.argv[2]);
const b = parseFloat(process.argv[3]);
const operation = process.argv[4];

if (operation === "add") {
  console.log(`Result: ${add(a, b)}`);
} else if (operation === "subtract") {
  console.log(`Result: ${subtract(a, b)}`);
} else {
  console.log("Invalid operation. Use 'add' or 'subtract'.");
}
