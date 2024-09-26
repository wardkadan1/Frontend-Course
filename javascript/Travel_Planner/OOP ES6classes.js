class Trip {
  #destination;
  #duration;
  #distance;
  #activities;

  constructor(destination, duration, distance) {
    this.setDestination(destination);
    this.setDuration(duration);
    this.setDistance(distance);
    this.#activities = [];
  }

  setDestination(value) {
    if (typeof value === "string" && value.trim() !== "") {
      this.#destination = value;
    } else {
      throw new Error("Destination must be a non-empty string.");
    }
  }

  setDuration(value) {
    if (typeof value === "number" && value > 0) {
      this.#duration = value;
    } else {
      throw new Error("Duration must be a positive number.");
    }
  }

  setDistance(value) {
    if (typeof value === "number" && value > 0) {
      this.#distance = value;
    } else {
      throw new Error("Distance must be a positive number.");
    }
  }

  addActivity(activity) {
    if (typeof activity === "string" && activity.trim() !== "") {
      this.#activities.push(activity);
    } else {
      throw new Error("Activity must be a non-empty string.");
    }
  }

  #calculateTotalCost() {
    const costPerDay = 100; // Fixed cost per day
    const costPerMile = 0.5; // Fixed cost per mile
    return this.#duration * costPerDay + this.#distance * costPerMile;
  }

  getTotalCost() {
    return this.#calculateTotalCost();
  }

  displayDetails() {
    return `Destination: ${this.#destination}, Duration: ${
      this.#duration
    } days, Distance: ${
      this.#distance
    } miles, Total Cost: $${this.getTotalCost().toFixed(
      2
    )}, Activities: ${this.#activities.join(", ")}`;
  }
}
