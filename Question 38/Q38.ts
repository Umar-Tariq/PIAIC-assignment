function describeCity(city: string, country: string = "DefaultCountry"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  describeCity("Karachi", "Pakistan");
  describeCity("Paris");
  describeCity("New York", "USA");
  