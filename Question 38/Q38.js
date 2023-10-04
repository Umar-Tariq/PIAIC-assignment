"use strict";
function describeCity(city, country = "DefaultCountry") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Karachi", "Pakistan");
describeCity("Paris");
describeCity("New York", "USA");
