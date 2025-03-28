var x = 10;  // Can be redeclared and updated
let y = 20;  // Can be updated, but not redeclared
const z = 30; // Cannot be updated or redeclared   
  


let name = "John Doe";       // Double quotes
const greeting = 'Hello!';   // Single quotes
let message = `Hi, ${name}`; // Template literal (backticks)

console.log(name);       // Output: John Doe
console.log(greeting);   // Output: Hello!
console.log(message);    // Output: Hi, John Doe


let age = 25;         // Integer
let price = 99.99;    // Float
let infinity = Infinity; // Special value
let notANumber = NaN; // Not-a-Number

console.log(age);        // Output: 25
console.log(price);      // Output: 99.99
console.log(infinity);   // Output: Infinity
console.log(notANumber); // Output: NaN


let isAdult = true;
const hasLicense = false;

console.log(isAdult);     // Output: true
console.log(hasLicense);  // Output: false


let colors = ["red", "green", "blue"];
const numbers = [1, 2, 3, 4];

console.log(colors);      // Output: ["red", "green", "blue"]
console.log(numbers[1]);  // Output: 2





console.log(colors);      // Output: ["red", "green", "blue"]
console.log(numbers[3]);  // Output: 2



let person = {
    name: "Alice",
    age: 30,
    isEmployed: true
};

console.log(person);           // Output: { name: "Alice", age: 30, isEmployed: true }
console.log(person.name);      // Output: Alice



let symbol1 = Symbol("id");
let symbol2 = Symbol("id");

console.log(symbol1 === symbol2); // Output: false (each symbol is unique)











const largeNumber = 123456789012345678901234567890n; // BigInt with 'n' at the end

console.log(largeNumber); // Output: 123456789012345678901234567890n




console.log(typeof name);         // Output: string
console.log(typeof age);          // Output: number
console.log(typeof isAdult);      // Output: boolean
console.log(typeof person);       // Output: object
console.log(typeof uninitialized);// Output: undefined
console.log(typeof symbol1);      // Output: symbol
console.log(typeof largeNumber);  // Output: bigint
