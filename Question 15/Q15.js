"use strict";
let guests = ["Yasin", "Haris", "Shahzaib", "Muzamil", "Abdullah"];
for (let i = 0; i < guests.length; i++) {
    console.log(`Hello ${guests[i]}, you are invited to dinner at 8:00 PM on 25th of August 2023`);
}
let cantMakeIt = guests.pop();
console.log(`\nSorry, ${cantMakeIt} can't make it to the dinner.\n`);
let newGuest = "Ahsan";
guests[1] = newGuest;
console.log("Updated invitation messages:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are invited to a dream dinner at 8:00 PM on 25th of August 2023.\n`);
    console.log("");
}
