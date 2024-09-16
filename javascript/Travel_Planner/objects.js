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

// 6
const destinationDetails = {
  name: "Machu Picchu",
  country: "Peru",
  yearVisited: 2019,
  ratings: [9, 8.5, 9, 9.5],
};

// 7
const destinationRatings = {
  "Machu Picchu": 9,
  "Great Wall of China": 8.5,
  "Eiffel Tower": 7.5,
  Colosseum: 6.5,
};

// 8
const destinations2 = {
  1: { name: "Machu Picchu", yearVisited: 2019, rating: 9 },
  2: { name: "Stonehenge", yearVisited: 2010, rating: 8.5 },
  3: { name: "Great Wall of China", yearVisited: 2018, rating: 8.6 },
};

// 9
const activityRatings = {
  hiking: [9, 8, 10, 7, 8.5],
  sightseeing: [8.5, 8, 9, 9.5, 7.5],
  snorkeling: [7, 7.5, 8, 8.5, 9],
};

// 10
const destinationAwards = {
  "Machu Picchu": "Most Visited",
  "Great Wall of China": "Most Visited",
  "Eiffel Tower": "Most Photographed",
  Colosseum: "Most Iconic",
};
