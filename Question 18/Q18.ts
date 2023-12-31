let places: string[] = ["lahore", "karachi", "Islamabad", "Quetta"];

console.log("Original order:");
console.log(places);

console.log("\nAlphabetical order:");
console.log([...places].sort());

console.log("\nOriginal order (unchanged):");
console.log(places);

console.log("\nReverse alphabetical order:");
console.log([...places].sort().reverse());

console.log("\nOriginal order (unchanged):");
console.log(places);

places.reverse();

console.log("\nReversed order:");
console.log(places);

places.reverse();

console.log("\nOriginal order (restored):");
console.log(places);

places.sort();

console.log("\nSorted in alphabetical order:");
console.log(places);

places.sort((a, b) => b.localeCompare(a));

console.log("\nSorted in reverse alphabetical order:");
console.log(places);
