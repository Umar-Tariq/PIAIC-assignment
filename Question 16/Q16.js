"use strict";
let guests = ["Yasin", "Haris", "Shahzaib", "Muzamil", "Abdullah"];
for (let i = 0; i < guests.length; i++) {
    console.log(`Hello ${guests[i]}, you are invited to dinner at 8:00 PM on 25th of August 2023`);
}
let cantMakeIt = guests.pop();
console.log(`\nSorry, ${cantMakeIt} can't make it to the dinner.`);
let newGuest = "Ahsan";
guests[4] = newGuest;
console.log("Updated invitation messages:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, You are invited to a dream dinner at 8:00 PM on 25th of August 2023.`);
}
console.log("Good news! A bigger dinner table is available.");
guests.unshift("Ali");
guests.splice((guests.length / 2), 0, "Billal");
guests.push("Ahmed");
console.log("Expanded invitation messages:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]}, You are invited to a dream dinner at 8:00 PM on 25th of August 2023.`);
}
