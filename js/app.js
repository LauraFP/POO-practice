// VARIABLES DEFINITION:

// Empty variable "cars" to store the new car objects:
var cars = [];

// Variable with the 10 car brands:
var carBrands = [
  "Ford",
  "Citroen",
  "Seat",
  "Toyota",
  "Renault",
  "Hyundai",
  "Audi",
  "Nissan",
  "BMW",
  "Honda"
];

// Variable with the 10 car models:
var carModels = [
  "Focus",
  "C3",
  "Ibiza",
  "Yaris",
  "Megan",
  "i20",
  "r8",
  "Micra",
  "X3",
  "Civic"
];

// Variable with the 10 car years:
var carYears = [
  2019,
  2018,
  2014,
  2019,
  2010,
  2016,
  2019,
  2018,
  2019,
  2013
];

// Variable with the 10 car colors:
var carColors = [
  "black",
  "white and red",
  "gray",
  "red",
  "deep blue",
  "white",
  "black",
  "blue",
  "anthracite",
  "pearl white"
];

// CONSTRUCTOR FUNCTION:

function car(brand, model, year, color) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
}

// FOR LOOP WITH AN INSTANCE TO GENERATE THE NEW 10 CAR OBJECTS:
for (var i = 0; i < 10; i++) {
  cars.push(new car(carBrands[i], carModels[i], carYears[i], carColors[i]));
}

// To see the array "cars" with the 10 car objects on console:

console.log(cars);
