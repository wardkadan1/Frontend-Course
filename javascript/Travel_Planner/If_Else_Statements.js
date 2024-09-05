//1

const travelBudget = 1200;
if (travelBudget > 1000) {
  console.log("Luxury travel options available");
} else {
  console.log("Looking for budget travel");
}

//2

const destinationTemp = 20;
if (destinationTemp >= 15 && destinationTemp <= 27) {
  console.log("Ideal weather for the trip");
} else {
  console.log("Consider another destination or time");
}

//3

const flightBooked = true;
const hotelBooked = false;
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

const chosenPackagePrice = 800;
const alternativePackagePrice = 900;
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

const satisfactionScore = 85;
console.log(
  satisfactionScore >= 80 ? "Highly satisfied traveler" : "Needs improvement"
);

//7

const groupSize = 5;
console.log(
  groupSize % 2 === 0 ? "Even number of travelers" : "Odd number of travelers"
);

//8

travelerAge = 16;
console.log(travelerAge < 12 ? "Child" : travelerAge <= 19 ? "Teen" : "Adult");

//9

const experienceLevel = 6;
console.log(experienceLevel > 5 ? "Experienced traveler" : "New traveler");

//10

const tripDuration = 10;
if (tripDuration < 3) {
  console.log("Weekend getaway");
} else if (tripDuration <= 14) {
  console.log("Standard vacation");
} else {
  console.log("Extended tour");
}

//11

travelerAge = 22;
const activityAgeRequirement = 18;
if (travelerAge >= activityAgeRequirement) {
  console.log("Allowed to participate");
} else {
  console.log("Age-restricted activity");
}

//12

const dayOfTravel = "Saturday";
if (dayOfTravel === "Saturday" || dayOfTravel === "Sunday") {
  console.log("Special weekend offer available!");
} else {
  console.log("Regular pricing");
}

//13

const destinationOpeningYear = 2005;
if (destinationOpeningYear >= 2001 && destinationOpeningYear <= 2100) {
  console.log("21st century destination");
} else {
  console.log("20th century destination");
}

//14

const destinationType = "Adventure";
const destinationRating = 9;
if (destinationType === "Adventure" && destinationRating >= 8) {
  console.log("Must Visit");
} else {
  console.log("Check reviews before planning your visit");
}

//15

const packagePrice = 1200;
if (packagePrice <= 1000) {
  console.log("Discounted package");
} else {
  console.log("Regular package price");
}

//16

travelerAge = 22;
const isAdultActivity = true;
if (isAdultActivity && travelerAge >= 18) {
  console.log("Allowed to participate");
} else {
  console.log("Age-restricted activity");
}

//17

const destinationName = "Famous Beach Resort";
if (
  destinationName.includes("famous") ||
  destinationName.includes("top destination")
) {
  console.log("This destination is a hotspot");
} else {
  console.log("This destination is not a hotspot");
}
