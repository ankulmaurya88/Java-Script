// function value(){
//     return "Ankul"
// }
// console.log(value()) ;

// function hello(name){
//     sum=`Hi my  name is  ,${name} ` ;
//     return sum ;
// }


// let author="Vikash";


// let value12="ankul " ;
// let value1="kumar" ;

// let work=`${value12} ${value1} `;

// console.log(work)

// console.log(hello(author))



// let firstName = "Ankul";
// let lastName = "Kumar";
// let fullName = firstName + " " + lastName;  // Concatenates with a space between names
// console.log(fullName);  // Output: Ankul Kumar


// let name = "Ankul";
// let age = 25;
// let sentence = "My name is " + name + " and I am " + age + " years old.";  // Using + operator
// console.log(sentence);  // Output: My name is Ankul and I am 25 years old.

// let sentenceTemplate = `My name is ${name} and I am ${age} years old.`;  // Using template literals                     
// console.log(sentenceTemplate);  // Output: My name is Ankul and I am 25 years old.   


const readline = require('readline');

// Create an interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your name: ', function(name) {
    console.log('Hello, ' + name + '!');
    rl.close();  // Close the input stream
});

