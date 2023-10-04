function makeShirt(size: string = "Large", message: string = ""): void {
    console.log(`You have ordered a ${size}-sized T-shirt with the following message: "${message}".`);
  }
  
  makeShirt();
  
  makeShirt("Medium","Hello");
  
  makeShirt("Small", "Hello World!");
  