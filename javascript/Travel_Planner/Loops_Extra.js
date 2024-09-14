// 1. Calculate Total Travel Time
const destinations1 = [
  { name: "Paris", distance: 500, speed: 50 },
  { name: "London", distance: 200, speed: 70 },
  {
    name: "New York",
    distance: 3000,
    speed: 500,
  },
];

function totalTime(destinations) {
  let sum = 0;
  for (let i = 0; i < destinations.length; i++) {
    sum = destinations[i].distance / destinations[i].speed + sum;
  }
  return sum;
}

console.log(`${totalTime(destinations1).toFixed(2)} hours`);

// 2. Find Longest Travel Route
const destinations2 = [
  {
    name: "Paris",
    routes: [
      { name: "Route 1", distance: 300 },
      { name: "Route 2", distance: 250 },
    ],
  },
  {
    name: "London",
    routes: [
      { name: "Route 1", distance: 200 },
      { name: "Route 2", distance: 280 },
    ],
  },
];

function longestTravelroute(destinations) {
  let x = 0;
  let longest = null;
  while (x < destinations.length) {
    if (longest === null) longest = destinations[x].routes[0];
    for (let i = 0; i < destinations[x].routes.length; i++)
      if (longest.distance < destinations[x].routes[i].distance)
        longest = destinations[x].routes[i];
    x++;
  }
  return longest;
}

console.log(longestTravelroute(destinations2));

// 3. Sort Destinations by Distance
const destinations3 = [
  {
    name: "Paris",
    routes: [{ distance: 300 }, { distance: 250 }],
  },
  {
    name: "London",
    routes: [{ distance: 200 }, { distance: 280 }],
  },
];

function DestinationsbyDistance(destinations) {
  for (let i = 0; i < destinations.length; i++) {
    let totalDistance = 0;
    for (let j = 0; j < destinations[i].routes.length; j++) {
      totalDistance += destinations[i].routes[j].distance;
    }

    destinations[i].totalDistance = totalDistance;
  }

  for (let i = 0; i < destinations.length - 1; i++) {
    for (let j = i + 1; j < destinations.length; j++) {
      if (destinations[i].totalDistance < destinations[j].totalDistance) {
        let temp = destinations[i];
        destinations[i] = destinations[j];
        destinations[j] = temp;
      }
    }
  }

  return destinations;
}

for (let i = 0; i < DestinationsbyDistance(destinations3).length; i++) {
  console.log(`Destination: ${DestinationsbyDistance(destinations3)[i].name}`);
  for (
    let j = 0;
    j < DestinationsbyDistance(destinations3)[i].routes.length;
    j++
  ) {
    console.log(
      `  Route ${j + 1}: Distance = ${
        DestinationsbyDistance(destinations3)[i].routes[j].distance
      }`
    );
  }
}

// 4. Travel Itinerary
const destinations4 = [
  { name: "Paris", connections: ["London"] },
  { name: "London", connections: ["New York"] },
  { name: "New York", connections: [] },
];
const start4 = "Paris";

function TravelItinerary(destinations, start) {
  let itinerary = [];
  let currentDestination = start;

  while (currentDestination !== null) {
    itinerary.push(currentDestination);

    let foundDestination = null;
    for (let i = 0; i < destinations.length; i++) {
      if (destinations[i].name === currentDestination) {
        foundDestination = destinations[i];
        break;
      }
    }

    if (foundDestination && foundDestination.connections.length > 0)
      currentDestination = foundDestination.connections[0];
    else currentDestination = null;
  }

  return itinerary;
}

console.log(TravelItinerary(destinations4, start4));

// 5. Least Number of Connections
const destinations5 = [
  {
    name: "Paris",
    connections: ["London", "New York"],
  },
  { name: "London", connections: ["New York"] },
  { name: "New York", connections: [] },
];

function NumberofConnections(destinations) {
  let leastConnectionsDestination = destinations[0].name;
  let leastConnectionsCount = destinations[0].connections.length;

  for (let i = 1; i < destinations.length; i++) {
    let currentConnectionsCount = destinations[i].connections.length;
    if (currentConnectionsCount < leastConnectionsCount) {
      leastConnectionsCount = currentConnectionsCount;
      leastConnectionsDestination = destinations[i].name;
    }
  }

  return leastConnectionsDestination;
}

console.log(NumberofConnections(destinations5));
