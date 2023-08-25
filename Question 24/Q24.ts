let fruite:string = "apple";
// Tests for equality and inequality with strings
console.log("Equality and inequality with strings:");
console.log(fruite == "apple"); 
console.log(fruite != "banana"); 
console.log(fruite == "banana"); 
console.log(fruite != "apple");

// Tests using the lower case function
console.log("\nLower case function:");
console.log(fruite.toLowerCase() == "apple"); 
console.log(fruite.toLowerCase() != "APPLE"); 

let num:number = 10;
// Numerical tests involving equality and inequality
console.log("\nNumerical tests:");
console.log(num == 10); 
console.log(num != 20); 
console.log(num > 3); 
console.log(num < 5); 
console.log(num >= 10); 
console.log(num <= 10);

// Tests using "and" and "or" operators
console.log("\n'And' and 'Or' operators:");
console.log(true && false);
console.log(false && true); 
console.log(true && true); 
console.log(false && false); 

console.log(true || false);
console.log(false || true); 
console.log(true || true); 
console.log(false || false); 

const fruits: string[] = ["apple", "banana", "orange", "grape"];
// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
console.log(fruits.includes("banana"));
console.log(fruits.includes("kiwi")); 

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(!fruits.includes("pear")); 
console.log(!fruits.includes("apple")); 
