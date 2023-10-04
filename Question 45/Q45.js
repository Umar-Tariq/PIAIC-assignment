"use strict";
function createCar(manufacturer, modelName, ...options) {
    const carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (const option of options) {
        for (const key in option) {
            carInfo[key] = option[key];
        }
    }
    return carInfo;
}
const car = createCar("Toyota", "Camry", { color: "Blue", year: 2022, hasSunroof: true });
console.log(car);
