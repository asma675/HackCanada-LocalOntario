import express from "express";
import bodyParser from "body-parser";

import mealPlannerRoutes from "./routes/mealPlanner.js";
import groceryListRoutes from "./routes/groceryList.js";
import recipeSearchRoutes from "./routes/recipeSearch.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use("/generate-meal-plan", mealPlannerRoutes);
app.use("/grocery-list", groceryListRoutes);
app.use("/recipes-from-ingredients", recipeSearchRoutes);

app.get("/test", (req, res) => res.send("OK"));
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));