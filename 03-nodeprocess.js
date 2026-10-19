// process - is a Node.js object that provides information about and control over the currently runnning node.js process.
console.log(process.version);
console.log(process.platform);
console.log(process.arch);

// process.argv - for index 0 and 1 it prints the path of node and the path of the file respectively and after that it prints the arguments passed to the file.
console.log(process.argv[2]);
const name = process.argv[2];
console.log(`Hello ${name}`);

//sum calculator
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
console.log(`sum: ${num1 + num2}`);

// process.exit(); // it will terminate the process and exit the program. It will not execute any code after this line.
console.log(`Hello ${name}`);


