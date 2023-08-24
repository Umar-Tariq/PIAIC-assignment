let places: string[] = ["lahore", "karachi", "Islamabad", "Quetta"];

console.log("Original order:");
console.log(places);

// Print array in alphabetical order without modifying
console.log("\nAlphabetical order:");
console.log([...places].sort());

// Show original order is still intact
console.log("\nOriginal order (unchanged):");
console.log(places);

// Print array in reverse alphabetical order without modifying
console.log("\nReverse alphabetical order:");
console.log([...places].sort().reverse());

// Show original order is still intact
console.log("\nOriginal order (unchanged):");
console.log(places);

// Reverse the order of the list
places.reverse();

// Print array to show reversed order
console.log("\nReversed order:");
console.log(places);

// Reverse the order of the list again to restore original order
places.reverse();

// Print array to show original order is restored
console.log("\nOriginal order (restored):");
console.log(places);

// Sort array in alphabetical order
places.sort();

// Print array to show sorted order
console.log("\nSorted in alphabetical order:");
console.log(places);

// Sort array to change order to reverse alphabetical
places.sort((a, b) => b.localeCompare(a));

// Print array to show reverse alphabetical order
console.log("\nSorted in reverse alphabetical order:");
console.log(places);
