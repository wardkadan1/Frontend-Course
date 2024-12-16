const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

// Node.js supports both, but the choice depends on the project setup.
const app = express(); // in this step im creating an instance from express
// if we just try to log the app
// console.log(app);
// the core of the server
// allow me to define route , handle http requests
// now any server it needs a door (port ) to coomunicate with the outside wors
const PORT = 3000;
app.use(cors());
app.use(express.json());
//  now what i need is to  make sure that my app is listening for any request that comming from the outside , and
//  if you look to the object that we log it , you will see a lestien property
app.listen(PORT, () => {
  console.log(`server is running  on port ${PORT}`);
});

//path stuff
const FilePath = path.resolve(__dirname, "recipe.json");

// ENDPOINT
// NOW AFTER i insalize the server im sure that my server is listening for any http request
// i will start talk about endpoint
// what is endpoint
// endpoint - url path where specifec task is performed

app.get("/", (req, res) => {
  res.send("Hello world ");
});
// now when i add any change in this file i need to reseet the server , so is there another libraray that make it easier for us
// yes we have nodemon
//  npm i nodemn  -g,

// now to create for our recipe app end point i will create 2 end point one for get and one for post

// app.get("/recipe", (req, res) => {
//   const recipe = [
//     {
//       recipeName: "pancake",
//       Instruction: "1- 2 cup of cacaoh  ",
//       Category: "brakfast",
//     },
//   ];
//   res.json(recipe);
// });
// here the frontend should give me a cors error
// what is cors
//  In your case, you're trying to make a request from http://localhost:5173 to http://localhost:3000, which are considered
// to solve this i need to install cors

// app.use() is a method to mount middleware to your application
// . Middleware is a function that executes during the lifecycle of an HTTP request

// now just to make it more realistic i want to save the data inside a file here called recipe.json
// now to deal with any file system i need a module called fs

app.get("/recipe", (req, res) => {
  // i added the recipe inside the json file
  res.json(recipes);
});
// now what im going to do is i want to take that data  from the recipe.json and when client acess with bthe endpoint of /recipe i will call  this function
const readRecipesFromFile = () => {
  try {
    const data = fs.readFileSync(FilePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};
let recipes = readRecipesFromFile();
// now for post method , what we need is the same but now i want to write to the fs

const writeRecipesToFile = () => {
  try {
    // This method converts a JavaScript object or array into a JSON-formatted string.
    fs.writeFileSync(FilePath, JSON.stringify(recipes));
  } catch (error) {
    console.log(error);
  }
};
// and what still missign is to do an end point for the post method
// to take something from the  req  like json format you need also to add a middle ware
app.post("/addrecipe", (req, res) => {
  const newRecipe = req.body;
  // you can add some validation

  recipes.push(newRecipe);
  writeRecipesToFile(newRecipe);
  res.json({ message: "added sucusfully ", recipes });
});

// // PUT endpoint to edit a recipe
app.put("/editRecipe/:id", (req, res) => {
  const recipeId = parseInt(req.params.id); // Get the recipe ID from the URL
  const updatedRecipe = req.body; // Get updated data from the request body

  // Validate the updated recipe
  if (
    !updatedRecipe.recipeName ||
    !updatedRecipe.Instruction ||
    !updatedRecipe.Category
  ) {
    return res
      .status(400)
      .json({ message: "All fields are required for editing!" });
  }

  // Find the recipe to edit
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);
  if (recipeIndex === -1) {
    return res.status(404).json({ message: "Recipe not found!" });
  }

  // Update the recipe fields
  recipes[recipeIndex] = { ...recipes[recipeIndex], ...updatedRecipe };

  // Save the updated recipes to the file
  writeRecipesToFile(recipes);

  res
    .status(200)
    .json({
      message: "Recipe updated successfully!",
      recipe: recipes[recipeIndex],
    });
});

// DELETE endpoint to delete a recipe
app.delete("/deleteRecipe/:id", (req, res) => {
  const recipeId = parseInt(req.params.id); // Get the recipe ID from the URL

  // Find the recipe to delete
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === recipeId);
  if (recipeIndex === -1) {
    return res.status(404).json({ message: "Recipe not found!" });
  }

  // Remove the recipe from the array
  const deletedRecipe = recipes.splice(recipeIndex, 1);

  // Save the updated recipes to the file
  writeRecipesToFile(recipes);

  res
    .status(200)
    .json({ message: "Recipe deleted successfully!", recipe: deletedRecipe });
});
