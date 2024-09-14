// 1
const travelItinerary1 = ["Paris", "Tokyo", "New York City"];
const destinationToCheck1 = "Tokyo";

if (travelItinerary1.includes(destinationToCheck1)) {
  console.log(destinationToCheck1 + " is in the travel itinerary.");
} else {
  console.log(destinationToCheck1 + " is not in the travel itinerary.");
}

// 2
const travelDates2 = ["2023-07-01", "2023-07-15", "2023-08-01"];
const reversedTravelDates = travelDates2.reverse();

console.log(reversedTravelDates);

// 3
const travelActivities3 = ["Sightseeing", "Hiking", "Dining"];
let activitiesString = travelActivities3.join(", ");

console.log(activitiesString);

// 4
const plannedActivities4 = ["Sightseeing", "Hiking", "Dining"];
const activityToCheck4 = "Hiking";

if (plannedActivities4.includes(activityToCheck4)) {
  console.log(activityToCheck4 + " is in the planned activities.");
} else {
  console.log(activityToCheck4 + " is not in the planned activities.");
}

// 5
const destinationList5 = ["Paris", "Tokyo", "New York City"];
const specificDestination5 = "New York City";
const index = destinationList5.indexOf(specificDestination5) + 1;

if (index !== -1) {
  console.log(specificDestination5 + " found at index " + index);
} else {
  console.log("Destination not found");
}

// 6
const upcomingTrips6 = ["Greece", "Iceland", "Japan"];
upcomingTrips6.pop();

console.log(upcomingTrips6);

// 7
const bucketListDestinations7 = ["Machu Picchu", "Great Wall of China"];
const newDestination7 = "Aurora Australis in Antarctica";
bucketListDestinations7.unshift(newDestination7);

console.log(bucketListDestinations7);

// 8
const europeanCapitals8 = ["Paris", "Berlin", "Madrid"];
const removedCapital = europeanCapitals8.shift();

console.log(removedCapital);

// 9
const beachDestinations9 = ["Maldives", "Bora Bora"];
const cityDestinations9 = ["New York", "Tokyo"];

const allDestinations = beachDestinations9.concat(cityDestinations9);
console.log(allDestinations);

// 10
const destinationList10 = ["Paris", "Tokyo", "New York City"];
let sortedDestinations = destinationList10.sort();

console.log(sortedDestinations);

// 11
const packingListString11 = "Passport,Sunscreen,Camera";
const packingListArray = packingListString11.split(",");

console.log(packingListArray);

// 12
const tripItinerary12 = ["Visit Louvre", "Eiffel Tower", "Seine River Cruise"];
const n12 = 2;
let firstFewDays = tripItinerary12.slice(0, n12);

console.log(firstFewDays);

// 13
const travelWishlist13 = [
  "Northern Lights in Norway",
  "Safari in Kenya",
  "Great Barrier Reef",
];

travelWishlist13.length = 0;
console.log(travelWishlist13);

// 14
const destinations14 = ["Paris", "Tokyo"];
const newDestination14 = "New York City";

destinations14.push(newDestination14);

console.log(destinations14);

// 15
const destinations15 = ["Paris", "Tokyo", "New York City"];
destinations15.pop();

console.log(destinations15);

// 16
const destinations16 = ["Paris", "Tokyo", "New York City"];
const destinationsString = destinations16.join(", ");

console.log(destinationsString);

// 17
const destinations17 = ["Paris", "Tokyo", "New York City"];
const destinationToFind17 = "Tokyo";
const index1 = destinations17.indexOf(destinationToFind17);

if (index1 !== -1) {
  console.log(destinationToFind17 + " is at index " + index);
} else {
  console.log(destinationToFind17 + " not found");
}

// 18
const destinations18 = ["Paris", "Tokyo", "New York City"];
destinations18.sort();

console.log(destinations18);

// 19
const distances19 = [500, 150, 300, 200];
distances19.sort((a, b) => b - a);

console.log(distances19);
