// Global array to store travel destinations
let travelDestinations = [];

// 1
function initializeDestinations() {
  travelDestinations = [];
}

// 2
function addDestination(destinationName, travelDate) {
  travelDestinations.push([destinationName, travelDate]);
}

// 3
function findTravelDate(destinationName) {
  const destination = travelDestinations.find(
    (dest) => dest[0] === destinationName
  );
  if (destination) {
    console.log(`Travel Date for ${destinationName}: ${destination[1]}`);
  } else {
    console.log("Destination was not found.");
  }
}

// 4
function updateTravelDate(destinationName, newTravelDate) {
  const destination = travelDestinations.find(
    (dest) => dest[0] === destinationName
  );
  if (destination) {
    destination[1] = newTravelDate;
    console.log(
      `Travel Date for ${destinationName} updated to ${newTravelDate}`
    );
  } else {
    console.log("Destination not found.");
  }
}

// 5
function removeDestination(destinationName) {
  const index = travelDestinations.findIndex(
    (dest) => dest[0] === destinationName
  );
  if (index > -1) {
    travelDestinations.splice(index, 1);
    console.log(`${destinationName} has been removed from the list.`);
  } else {
    console.log("Destination not found.");
  }
}

// 6
function listDestinations() {
  travelDestinations.forEach((dest) => {
    console.log(`Destination Name - Travel Date: ${dest[0]} - ${dest[1]}`);
  });
}

// 7
function findNextDestination() {
  const currentDate = new Date();
  const upcomingDestinations = travelDestinations
    .filter((dest) => new Date(dest[1]) > currentDate)
    .sort((a, b) => new Date(a[1]) - new Date(b[1]));

  if (upcomingDestinations.length > 0) {
    console.log(
      `Next destination is ${upcomingDestinations[0][0]} on ${upcomingDestinations[0][1]}`
    );
  } else {
    console.log("There are no upcoming destinations.");
  }
}

// Example Usage
initializeDestinations();
addDestination("Paris", "2024-04-01");
addDestination("London", "2024-05-15");
addDestination("New York", "2023-12-25");
findTravelDate("Paris");
updateTravelDate("Paris", "2024-04-10");
removeDestination("London");
listDestinations();
findNextDestination();

// Pure Functions

// 1. Determine the Average Rating of Trips
// Input: [8.5, 7.9, 6.3, 9.2, 8.1]
function averageRating(ratings) {
  const total = ratings.reduce((sum, rating) => sum + rating, 0);
  return total / ratings.length;
}

console.log(averageRating([8.5, 7.9, 6.3, 9.2, 8.1]));

// 2. Extract Organizer Names from Trip Names
// Input Example: ['Europe Exploration (2020) - Organized by Wanderlust Travel', 'Asian Adventure (2019) - Organized by Globe Trotters', 'Caribbean Cruise (2022) - Organized by Cruise Experts']
function extractOrganizerNames(tripNames) {
  return tripNames.map((trip) => {
    const parts = trip.split(" - Organized by ");
    return parts[1];
  });
}
console.log(
  extractOrganizerNames([
    "Europe Exploration (2020) - Organized by Wanderlust Travel",
    "Asian Adventure (2019) - Organized by Globe Trotters",
    "Caribbean Cruise (2022) - Organized by Cruise Experts",
  ])
);

// 3. Check if a Trip Title Contains a Specific Word
// Input: ('European Adventure', 'Europe')
function containsWord(tripTitle, word) {
  return tripTitle.includes(word);
}
console.log(containsWord("European Adventure", "Europe"));

// 4. Check if All Trip Titles Start with the Same Letter
// Input: ['Paris Getaway', 'Prairie Expedition', 'Portugal Experience']
function allTitlesStartWithSameLetter(tripTitles) {
  const firstLetter = tripTitles[0][0].toLowerCase();
  return tripTitles.every((title) => title[0].toLowerCase() === firstLetter);
}
console.log(
  allTitlesStartWithSameLetter([
    "Paris Getaway",
    "Prairie Expedition",
    "Portugal Experience",
  ])
);

// 5. Concatenate All Trip Types into a Single String
// Input: ['City', 'Beach', 'Mountain', 'Cruise']
function concatenateTripTypes(tripTypes) {
  return tripTypes.join(", ");
}
console.log(concatenateTripTypes(["City", "Beach", "Mountain", "Cruise"]));

// 6. Check if Any Trip Title is Longer Than 15 Characters
// Input: ['European Adventure', 'Exploring Asia', 'African Safari']
function anyTitleLongerThan15(tripTitles) {
  return tripTitles.some((title) => title.length > 15);
}
console.log(
  anyTitleLongerThan15([
    "European Adventure",
    "Exploring Asia",
    "African Safari",
  ])
);

// 7. Find Trips Organized by a Specific Organizer
// Input Example: ['European Adventure', 'Asian Expedition', 'Caribbean Cruise'], ['Wanderlust Travel', 'Globe Trotters', 'Cruise Experts'], 'Wanderlust Travel'
function findTripsByOrganizer(tripTitles, organizers, organizer) {
  return tripTitles.filter(
    (tripTitles, index) => organizers[index] === organizer
  );
}
console.log(
  findTripsByOrganizer(
    ["European Adventure", "Asian Expedition", "Caribbean Cruise"],
    ["Wanderlust Travel", "Globe Trotters", "Cruise Experts"],
    "Wanderlust Travel"
  )
);

// 8. Capitalize the First Letter of Each Trip Title
// Input: ['european adventure', 'asian expedition', 'caribbean cruise']
function capitalizeTripTitles(tripTitles) {
  return tripTitles.map((title) => title[0].toUpperCase() + title.slice(1));
}

console.log(
  capitalizeTripTitles([
    "european adventure",
    "asian expedition",
    "caribbean cruise",
  ])
);

// Bonus Exercises

// 1. Sort Destination Ratings
// Input: [4, 2, 5, 3, 1]
function sortRatings(ratings) {
  return ratings.sort();
}
console.log(sortRatings([4, 2, 5, 3, 1]));

// 2. Average Rating of Top N Destinations
// Input: ([2, 3, 5, 4, 1], 3)
function averageTopNDestinations(ratings, n) {
  const sortedRatings = ratings.sort((a, b) => b - a);
  const total = sortedRatings
    .slice(0, n)
    .reduce((sum, rating) => sum + rating, 0);
  return total / n;
}
console.log(averageTopNDestinations([2, 3, 5, 4, 1], 3));

// 3. Create Rating Frequency Map for Destinations
// Input: [3, 4, 3, 5, 4, 5, 5]

// 4. Normalize Destination Ratings
// Input: ([1, 2, 3, 4, 5], 0, 100)
function normalizeRatings(ratings, min, max) {
  const currentMin = Math.min(...ratings);
  const currentMax = Math.max(...ratings);
  console.log(currentMin, currentMax);

  return ratings.map(
    (rating) =>
      ((rating - currentMin) / (currentMax - currentMin)) * (max - min) + min
  );
}
console.log(normalizeRatings([1, 2, 3, 4, 5], 0, 100));
