//1

let destination = {
  name: "Tokyo",
  country: "Japan",
  yearVisited: 2019,
  activities: ["Sightseeing", "Cuisine tasting", "Shopping"],
  ratings: [4.5, 5, 4.7],
};

function getAverageRating(destination) {
  return (
    destination.ratings.reduce((acc, cur) => acc + cur, 0) /
    destination.ratings.length
  );
}

console.log("Average Rating: " + getAverageRating(destination));

//2

destination.landmarks = [
  {
    name: "Senso-ji Temple",
    description: "An ancient Buddhist temple located in Asakusa.",
  },
  {
    name: "Tokyo Tower",
    description:
      "A communications and observation tower in the Shiba-koen district.",
  },
];

console.log(destination.activities[1]);
console.log(destination["activities"][1]);
console.log(destination.landmarks[1].name);
console.log(destination["landmarks"][1]["name"]);

//3

//-1
destination.yearVisited = 2023;
//-2
destination.ratings.push(4.8);
//-3
delete destination.country;
//-4
destination.landmarks[0].description =
  "The most visited spiritual site in Asakusa.";
destination["landmarks"][0]["description"] =
  "The most visited spiritual site in Asakusa.";
//-5
console.log("Has ratings:", "ratings" in destination);

// 4

destinations = [
  {
    name: "Eiffel Tower",
    details: { visitorsPerYear: 7000000, entryFee: "25 USD" },
  },
  {
    name: "Great Wall of China",
    details: { visitorsPerYear: 10000000, entryFee: "60 CNY" },
  },
];

console.log(destinations[0].details.visitorsPerYear);

function getAverageNumberofVisitors(destination) {
  return (
    destination.reduce((sum, cur) => sum + cur.details.visitorsPerYear, 0) /
    destination.length
  );
}

console.log(getAverageNumberofVisitors(destinations));

//5

const destination1 = {
  name: "Eiffel Tower",
  location: "Paris",
};
const destination2 = {
  visitorsPerYear: 7000000,
  details: {
    entryFee: "25 USD",
  },
};

const mergedDestination = Object.assign(destination1, destination2);
console.log(mergedDestination);

Object.freeze(mergedDestination);

Object.seal(mergedDestination);

console.log("Is sealed:", Object.isSealed(mergedDestination));
console.log("Is frozen:", Object.isFrozen(mergedDestination));

// 6
const destinationDetails = {
  name: "Machu Picchu",
  country: "Peru",
  yearVisited: 2019,
  ratings: [9, 8.5, 9, 9.5],
};

function logProperties(obj) {
  Object.keys(obj).forEach((x) => {
    console.log(`${x}: ${obj[x]}`);
  });
}

logProperties(destinationDetails);

// 7
const destinationRatings = {
  "Machu Picchu": 9,
  "Great Wall of China": 8.5,
  "Eiffel Tower": 7.5,
  Colosseum: 6.5,
};

function increaseRating(destinationName) {
  const entries = Object.entries(destinationRatings);
  for (const [name, rating] of entries) {
    if (name === destinationName && rating < 7) {
      destinationRatings[name] = rating + 1;
      console.log(`${name} rating increased to ${destinationRatings[name]}`);
    }
  }
}

increaseRating("Colosseum");

// 8
const destinations2 = {
  1: { name: "Machu Picchu", yearVisited: 2019, rating: 9 },
  2: { name: "Stonehenge", yearVisited: 2010, rating: 8.5 },
  3: { name: "Great Wall of China", yearVisited: 2018, rating: 8.6 },
};

function getRecentDestinations(destinations) {
  let result = [];
  for (const [id, destination] of Object.entries(destinations)) {
    if (destination.yearVisited > 2015) {
      let newDestination = {
        name: destination.name,
        yearVisited: destination.yearVisited,
        rating: destination.rating,
        isNewer: true,
      };
      result.push(newDestination);
    }
  }
  return result;
}

const recentDestinations = getRecentDestinations(destinations2);
console.log(recentDestinations);

// 9
const activityRatings = {
  hiking: [9, 8, 10, 7, 8.5],
  sightseeing: [8.5, 8, 9, 9.5, 7.5],
  snorkeling: [7, 7.5, 8, 8.5, 9],
};

function calculateAverageRatings(activityRatings) {
  const activities = Object.keys(activityRatings);
  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    const ratings = activityRatings[activity];
    let sum = 0;
    for (let j = 0; j < ratings.length; j++) {
      sum += ratings[j];
    }
    const average = sum / ratings.length;
    console.log(`${activity} average rating: ${average.toFixed(2)}`);
  }
}

calculateAverageRatings(activityRatings);

// 10
const destinationAwards = {
  "Machu Picchu": "Most Visited",
  "Great Wall of China": "Most Visited",
  "Eiffel Tower": "Most Photographed",
  Colosseum: "Most Iconic",
};
