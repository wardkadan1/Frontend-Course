function TravelPlanner() {
  this.destinations = [];
  this.flights = [];
  this.accommodations = [];

  this.addDestination = function (destination) {
    this.destinations.push(destination);
  };

  this.addFlight = function (flight) {
    this.flights.push(flight);
  };

  this.addAccommodation = function (accommodation) {
    this.accommodations.push(accommodation);
  };

  this.calculateTotalCost = function () {
    let totalFlightCost = 0;
    let totalAccommodationCost = 0;

    for (let i = 0; i < this.flights.length; i++) {
      totalFlightCost += this.flights[i].cost;
    }

    for (let i = 0; i < this.accommodations.length; i++) {
      totalAccommodationCost += this.accommodations[i].costPerNight;
    }

    return totalFlightCost + totalAccommodationCost;
  };

  this.listDestinations = function () {
    let destinationNames = [];
    for (let i = 0; i < this.destinations.length; i++) {
      destinationNames.push(this.destinations[i].name);
    }
    return destinationNames;
  };

  this.calculateTotalRevenue = function () {
    return this.calculateTotalCost();
  };

  this.getDestinationByName = function (name) {
    for (let i = 0; i < this.destinations.length; i++) {
      if (this.destinations[i].name === name) {
        return this.destinations[i];
      }
    }
    return null;
  };

  this.findDestinationByHighestCost = function () {
    let highestCost = 0;
    let highestDestination = null;

    for (let i = 0; i < this.destinations.length; i++) {
      if (this.destinations[i].baseCost > highestCost) {
        highestCost = this.destinations[i].baseCost;
        highestDestination = this.destinations[i];
      }
    }
    return highestDestination;
  };
}

function Destination(city, country, baseCost) {
  this.city = city;
  this.country = country;
  this.baseCost = baseCost;
  this.accommodationCost = 0;

  this.getInfo = function () {
    return `City: ${this.city}, Country: ${this.country}, Base Cost: $${this.baseCost}`;
  };

  this.calculateCost = function () {
    return this.baseCost + this.accommodationCost;
  };

  this.updateBaseCost = function (newCost) {
    this.baseCost = newCost;
  };

  this.getDiscountedCost = function (discountPercentage) {
    let discountAmount = (this.baseCost * discountPercentage) / 100;
    return this.baseCost - discountAmount;
  };
}

function Flight(departureCity, arrivalCity, distance, pricePerMile) {
  this.departureCity = departureCity;
  this.arrivalCity = arrivalCity;
  this.distance = distance;
  this.pricePerMile = pricePerMile;

  this.calculateCost = function () {
    return this.distance * this.pricePerMile;
  };

  this.updatePricePerMile = function (newPrice) {
    this.pricePerMile = newPrice;
  };

  this.updateFlightPrice = function (newDistance) {
    this.distance = newDistance;
    return this.calculateCost();
  };
}

function Accommodation(hotelName, costPerNight, numberOfNights) {
  this.hotelName = hotelName;
  this.costPerNight = costPerNight;
  this.numberOfNights = numberOfNights;

  this.calculateCost = function () {
    return this.costPerNight * this.numberOfNights;
  };

  this.applySeasonalDiscount = function (discount) {
    let totalCost = this.calculateCost();
    return totalCost - totalCost * (discount / 100);
  };

  this.calculateTotalCostWithExtraFees = function (fees) {
    return this.calculateCost() + fees;
  };
}
