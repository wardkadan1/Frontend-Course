//1

function CalcTotalTripDays(days, index = 0) {
  if (index === days.length) return 0;
  return days[index] + CalcTotalTripDays(days, index + 1);
}

days = [3, 5, 7, 2];
console.log(CalcTotalTripDays(days));

//2

function CountCitiesVisited(Visited, index = 0) {
  if (index === Visited.length) return 0;
  return Visited[index].length + CountCitiesVisited(Visited, index + 1);
}

Visited = [["Paris", "London"], ["Rome", "Florence"], ["New York"]];
console.log(CountCitiesVisited(Visited));

//3

function FindDestination(destination, city) {
  for (let key in destination) {
    if (typeof destination[key] === "object") {
      if (FindDestination(destination[key], city)) {
        return true;
      }
    } else if (destination[key] === city) {
      return true;
    }
  }
  return false;
}

const destination = {
  Europe: { France: "Paris", Italy: "Rome" },
  USA: { NY: "New York" },
};
console.log(FindDestination(destination, "Rome"));
console.log(FindDestination(destination, "Berlin"));

//4

function CalculateAverageDistance(numbers, index = 0, sum = 0) {
  if (index === numbers.length) return sum / numbers.length;
  return CalculateAverageDistance(numbers, index + 1, sum + numbers[index]);
}

numbers = [200, 150, 400, 100];
console.log(CalculateAverageDistance(numbers));

//5

function SumTripCosts(numbers, index = 0, i = 0, sum = 0) {
  if (index === numbers.length) return sum;
  if (i === numbers[index].length)
    return SumTripCosts(numbers, index + 1, 0, sum);
  if (i <= numbers[index].length)
    return SumTripCosts(numbers, index, i + 1, numbers[index][i] + sum);
}

numbers = [[100, 200], [150, 300], [50]];
console.log(SumTripCosts(numbers));

//6

function FindLongestTrip(numbers, index = 0, Longest = 0) {
  if (index === numbers.length) return Longest;
  if (Longest < numbers[index]) Longest = numbers[index];
  return FindLongestTrip(numbers, index + 1, Longest);
}

numbers = [10, 20, 15, 25];
console.log(FindLongestTrip(numbers));

//7

function ListAllCitiesAlphabetically(city, index = 0, i = 0, cityarr = []) {
  if (index === city.length) return cityarr.sort();
  if (i === city[index].length)
    return ListAllCitiesAlphabetically(city, index + 1, 0, cityarr);
  if (i <= city[index].length) {
    cityarr.push(city[index][i]);
    return ListAllCitiesAlphabetically(city, index, i + 1, cityarr);
  }
}

city = [["Paris", "London"], ["Rome", "Florence"], ["New York"]];
console.log(ListAllCitiesAlphabetically(city));

//8

function FindMostExpensiveTrip(numbers, index = 0, i = 0, Expensive = 0) {
  if (index === numbers.length) return Expensive;
  if (i === numbers[index].length)
    return FindMostExpensiveTrip(numbers, index + 1, 0, Expensive);
  if (i <= numbers[index].length) {
    if (Expensive < numbers[index][i]) Expensive = numbers[index][i];
    return FindMostExpensiveTrip(numbers, index, i + 1, Expensive);
  }
}

TripCosts = [[500, 300], [800, 200], [1000]];
console.log(FindMostExpensiveTrip(TripCosts));

//9

function TrackFlightTransfers(flights, transfers = 0) {
  if (!flights) return transfers;
  for (let key in flights) {
    if (flights[key] && typeof flights[key] === "object") {
      return TrackFlightTransfers(flights[key], transfers + 1);
    }
  }
  return transfers;
}

const tripDetails = {
  flight1: {
    transfer: "London",
    flight2: {
      transfer: "New York",
      flight3: null,
    },
  },
};

console.log(TrackFlightTransfers(tripDetails));

//10

function FlattenCityList(city, cityarr = []) {
  for (let i = 0; i < city.length; i++) {
    if (Array.isArray(city[i])) {
      FlattenCityList(city[i], cityarr);
    } else {
      cityarr.push(city[i]);
    }
  }
  return cityarr;
}

city = [["Paris"], ["Rome", ["Florence", "Venice"]], ["New York"]];
console.log(FlattenCityList(city));

//11

function TotalAccommodationCost(trips, index = 0) {
  if (index === trips.length) return 0;
  const currentTripCost = trips[index].hotel + trips[index].food;
  return currentTripCost + TotalAccommodationCost(trips, index + 1);
}

const trips = [
  { hotel: 200, food: 100 },
  { hotel: 300, food: 150 },
  { hotel: 250, food: 120 },
];

console.log(TotalAccommodationCost(trips));

//12

function FindLongestCityName(numbers, index = 0, i = 0, Longest = "") {
  if (index === numbers.length) return Longest;
  if (i === numbers[index].length)
    return FindLongestCityName(numbers, index + 1, 0, Longest);
  if (i <= numbers[index].length) {
    if (Longest.length < numbers[index][i].length) Longest = numbers[index][i];
    return FindLongestCityName(numbers, index, i + 1, Longest);
  }
}

city = [
  ["Paris", "Los Angeles"],
  ["New York", "Florence"],
];
console.log(FindLongestCityName(city));
