"use strict";
function makeShirt(size = "Large", message = "I love TypeScript") {
    console.log(`You have ordered a ${size}-sized T-shirt with the following message: "${message}".`);
}
makeShirt();
makeShirt("Medium");
makeShirt("Small", "Hello World!");
