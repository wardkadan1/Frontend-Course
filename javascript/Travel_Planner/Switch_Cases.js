//1

const dayOfWeek = 5;
switch (dayOfWeek) {
  case 1:
    console.log("Special activity for Sunday");
    break;
  case 2:
    console.log("Special activity for Monday");
    break;
  case 3:
    console.log("Special activity for Tuesday");
    break;
  case 4:
    console.log("Special activity for Wednesday");
    break;
  case 5:
    console.log("Special activity for Thursday");
    break;
  case 6:
    console.log("Special activity for Friday");
    break;
  case 7:
    console.log("Special activity for Saturday");
    break;
  default:
    console.log("Invalid day");
}

//2

const themeColor = "light";
switch (themeColor) {
  case "light":
    console.log("Theme set to light");
    break;
  case "dark":
    console.log("Theme set to dark");
    break;
  case "sea":
    console.log("Theme set to sea");
    break;
  default:
    console.log("Unsupported theme color");
}

//3

const notificationStatus = "new";
switch (notificationStatus) {
  case "new":
  case "unread":
  case "unopened":
    console.log("You have new travel notifications!");
    break;
  case "read":
    console.log("No new notifications");
    break;
  default:
    console.log("Unknown notification status");
}

//4

const packageRating = "Premium";
switch (packageRating) {
  case "Basic":
    console.log("Basic package: No frills travel");
    break;
  case "Standard":
    console.log("Standard package: Includes basic amenities");
    break;
  case "Premium":
    console.log("Premium package: Includes luxurious amenities");
    break;
  case "Luxury":
    console.log("Luxury package: Ultimate travel experience");
    break;
  default:
    console.log("Invalid package rating");
}

//5

const mealPlan = "Lunch";
switch (mealPlan) {
  case "Breakfast":
    console.log("Breakfast");
  case "Lunch":
    console.log("Lunch");
  case "Dinner":
    console.log("Dinner");
}

//6

const satisfactionScore = 75;
switch (true) {
  case satisfactionScore >= 90:
    console.log("Highly Satisfied");
    break;
  case satisfactionScore >= 70 && satisfactionScore < 90:
    console.log("Satisfied");
    break;
  case satisfactionScore >= 50 && satisfactionScore < 70:
    console.log("Neutral");
    break;
  default:
    console.log("Dissatisfied");
}

//7

const travelMonth = 12;
switch (travelMonth) {
  case 12:
  case 1:
  case 2:
    console.log(
      "Winter Travel: Suggested destinations include skiing resorts."
    );
    break;
  case 3:
  case 4:
  case 5:
    console.log(
      "Spring Travel: Suggested destinations include parks and gardens."
    );
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer Travel: Suggested destinations include beaches.");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Fall Travel: Suggested destinations include scenic forests.");
    break;
  default:
    console.log("Invalid month");
}

//8

const travelSeason = 4;
switch (travelSeason) {
  case 1:
    console.log("Winter Advisory: Watch out for snowy conditions.");
    break;
  case 2:
    console.log("Spring Advisory: Expect mild weather and some rain.");
    break;
  case 3:
    console.log("Summer Advisory: Heat waves possible, stay hydrated.");
    break;
  case 4:
    console.log("Fall Advisory: Beautiful foliage, but cooler temperatures.");
    break;
  default:
    console.log("Invalid season");
}
