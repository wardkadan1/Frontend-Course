//1
let activityDurations = [2, 3, 1];
let totalDuration = 0;

for (let i = 0; i < activityDurations.length; i++) {
  totalDuration += activityDurations[i];
}
console.log("Total trip duration:", totalDuration);

//2

let longestDuration = activityDurations[0];

for (let i = 1; i < activityDurations.length; i++) {
  if (activityDurations[i] > longestDuration) {
    longestDuration = activityDurations[i];
  }
}
console.log("Longest activity duration:", longestDuration);

//3

let activityNames = ["Sightseeing", "Hiking", "Sightseeing"];
let activityCount = {};

for (let i = 0; i < activityNames.length; i++) {
  let activity = activityNames[i];
  if (activityCount[activity]) {
    activityCount[activity]++;
  } else {
    activityCount[activity] = 1;
  }
}

let mostFrequent = null;
let maxCount = 0;
for (let activity in activityCount) {
  if (activityCount[activity] > maxCount) {
    maxCount = activityCount[activity];
    mostFrequentActivity = activity;
  }
}
console.log("Most frequent activity:", mostFrequentActivity);

//4

let shortest_duration = activityDurations[0];

for (let i = 1; i < activityDurations.length; i++) {
  if (activityDurations[i] < shortest_duration) {
    shortest_duration = activityDurations[i];
  }
}
console.log("Shortest activity duration:", shortest_duration);

//5

const transportationTypes = ["Car", "Train", "Car", "Flight"];
let transportationCount = {};

for (let i = 0; i < transportationTypes.length; i++) {
  let transport = transportationTypes[i];
  if (transportationCount[transport]) {
    transportationCount[transport]++;
  } else {
    transportationCount[transport] = 1;
  }
}
console.log("Transportation counts:", transportationCount);

//6

let travelExpenses = [50, 100, 75, 125, 200];
let totalExpense = 0;

for (let i = 0; i < travelExpenses.length; i++) {
  totalExpense += travelExpenses[i];
}
let averageExpense = totalExpense / travelExpenses.length;
console.log("Average travel expense:", averageExpense);

//7

let highestExpense = travelExpenses[0];
for (let i = 1; i < travelExpenses.length; i++) {
  if (travelExpenses[i] > highestExpense) {
    highestExpense = travelExpenses[i];
  }
}
console.log("Highest single travel expense:", highestExpense);

//8

let budget = 150;
let count = 0;

for (let i = 0; i < travelExpenses.length; i++) {
  if (travelExpenses[i] <= budget) {
    count++;
  }
}
console.log("Number of expenses under budget:", count);

//9

const categoryExpenses = [
  [100, 200],
  [150, 175],
  [120, 250],
];

for (let i = 0; i < categoryExpenses.length; i++) {
  let total = 0;
  for (let j = 0; j < categoryExpenses[i].length; j++) {
    total += categoryExpenses[i][j];
  }
  console.log("Total expense for category", i + 1, ":", total);
}

//10

let routeDistances = [
  [120, 300],
  [150, 175],
  [100, 250],
];

for (let i = 0; i < routeDistances.length; i++) {
  let shortestRoute = routeDistances[i][0];
  for (let j = 1; j < routeDistances[i].length; j++) {
    if (routeDistances[i][j] < shortestRoute) {
      shortestRoute = routeDistances[i][j];
    }
  }
  console.log("Shortest route for travel plan", i + 1, ":", shortestRoute);
}

//11

const activityDurationsMatrix = [
  [2, 3],
  [1, 4],
  [3, 2],
];

for (let i = 0; i < activityDurationsMatrix.length; i++) {
  let total = 0;
  for (let j = 0; j < activityDurationsMatrix[i].length; j++) {
    total += activityDurationsMatrix[i][j];
  }
  let average = total / activityDurationsMatrix[i].length;
  console.log("Average duration for activity type", i + 1, ":", average);
}

//12

const destinationRatingMatrix = [
  [4.5, 4.7],
  [4.8, 4.6],
  [4.9, 5.0],
];

for (let i = 0; i < destinationRatingMatrix[0].length; i++) {
  let highestRating = destinationRatingMatrix[0][i];
  for (let j = 1; j < destinationRatingMatrix.length; j++) {
    if (destinationRatingMatrix[j][i] > highestRating) {
      highestRating = destinationRatingMatrix[j][i];
    }
  }
  console.log("Highest rating for category", i + 1, ":", highestRating);
}

//13

const regionRecommendationMatrix = [
  [5, 7],
  [8, 6],
  [9, 7],
];
let threshold = 7;

for (let i = 0; i < regionRecommendationMatrix.length; i++) {
  let count = 0;
  for (let j = 0; j < regionRecommendationMatrix[i].length; j++) {
    if (regionRecommendationMatrix[i][j] >= threshold) {
      count++;
    }
  }
  console.log("Highly recommended destinations in region", i + 1, ":", count);
}

//14

const mustVisitRatingMatrix = [
  [4.5, 4.7],
  [4.9, 5.0],
  [4.8, 4.9],
];
threshold = 4.8;

for (let i = 0; i < mustVisitRatingMatrix.length; i++) {
  let sum = 0;
  for (let j = 0; j < mustVisitRatingMatrix[i].length; j++) {
    if (mustVisitRatingMatrix[i][j] > threshold) {
      sum += mustVisitRatingMatrix[i][j];
    }
  }
  console.log(
    "Sum of ratings greater than",
    threshold,
    "in region",
    i + 1,
    ":",
    sum
  );
}
