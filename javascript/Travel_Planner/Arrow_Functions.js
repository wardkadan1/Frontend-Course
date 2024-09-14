const destinations = require("./travelData.js");

//1
const getDestinationName = (destination) => destination.name;

//2
const getTravelStatus = (status) => {
  if (status === "Visited") {
    return "You have visited this place";
  } else if (status === "Upcoming") {
    return "You are planning to visit this place";
  }
  return "This place is in your wishlist";
};

//3
const getTotalBudget = (destinations) => {
  let totalBudget = 0;
  destinations.forEach((destination) => (totalBudget += destination.budget));
  return `Total travel budget is ${totalBudget}`;
};

//4
let sortedDestinations = destinations.sort((a, b) => b.budget - a.budget);

//5
const getDestinationNames = (destinations) =>
  destinations.map((destination) => destination.name);

console.log(sortedDestinations);
