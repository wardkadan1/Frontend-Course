//1

let travelBudget = 1200;
if (travelBudget > 1000) {
  console.log("Luxury travel options available");
} else {
  console.log("Looking for budget travel");
}

//2

let destinationTemp = 20;
if (destinationTemp >= 15 && destinationTemp <= 27) {
  console.log("Ideal weather for the trip");
} else {
  console.log("Consider another destination or time");
}

//3

let flightBooked = true;
let hotelBooked = false;
if (flightBooked) {
  if (hotelBooked) {
    console.log("Your travel plan is set");
  } else {
    console.log("You need to book a hotel");
  }
} else {
  console.log("You need to book a flight");
}

//4

let chosenPackagePrice = 800;
let alternativePackagePrice = 900;
if (chosenPackagePrice === alternativePackagePrice) {
  console.log("You've chosen the best priced package");
} else if (alternativePackagePrice < chosenPackagePrice) {
  console.log("Consider switching for a better price");
}

//5

let travelerAge = 70;
if (travelerAge >= 65) {
  console.log("Eligible for senior citizen discounts");
} else if (travelerAge <= 18) {
  console.log("Eligible for student discounts");
} else {
  console.log("Regular pricing applies");
}

//6

let satisfactionScore = 85;
console.log(
  satisfactionScore >= 80 ? "Highly satisfied traveler" : "Needs improvement"
);

//7

let groupSize = 5;
console.log(
  groupSize % 2 === 0 ? "Even number of travelers" : "Odd number of travelers"
);

//8

travelerAge = 16;
console.log(travelerAge < 12 ? "Child" : travelerAge <= 19 ? "Teen" : "Adult");

//9

let experienceLevel = 6;
console.log(experienceLevel > 5 ? "Experienced traveler" : "New traveler");

//10

let tripDuration = 10;
if (tripDuration < 3) {
  console.log("Weekend getaway");
} else if (tripDuration <= 14) {
  console.log("Standard vacation");
} else {
  console.log("Extended tour");
}

//11

travelerAge = 22;
let activityAgeRequirement = 18;
if (travelerAge >= activityAgeRequirement) {
  console.log("Allowed to participate");
} else {
  console.log("Age-restricted activity");
}

//12

let dayOfTravel = "Saturday";
if (dayOfTravel === "Saturday" || dayOfTravel === "Sunday") {
  console.log("Special weekend offer available!");
} else {
  console.log("Regular pricing");
}

//13

let destinationOpeningYear = 2005;
if (destinationOpeningYear >= 2001 && destinationOpeningYear <= 2100) {
  console.log("21st century destination");
} else {
  console.log("20th century destination");
}

//14

let destinationType = "Adventure";
let destinationRating = 9;
if (destinationType === "Adventure" && destinationRating >= 8) {
  console.log("Must Visit");
} else {
  console.log("Check reviews before planning your visit");
}

//15

let packagePrice = 1200;
if (packagePrice <= 1000) {
  console.log("Discounted package");
} else {
  console.log("Regular package price");
}

//16

travelerAge = 22;
let isAdultActivity = true;
if (isAdultActivity && travelerAge >= 18) {
  console.log("Allowed to participate");
} else {
  console.log("Age-restricted activity");
}

//17

let destinationName = "Famous Beach Resort";
if (
  destinationName.includes("famous") ||
  destinationName.includes("top destination")
) {
  console.log("This destination is a hotspot");
} else {
  console.log("This destination is not a hotspot");
}
