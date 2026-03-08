import express from "express";
import { getRecipesFromIngredients } from "../controllers/recipeSearchController.js";

const router = express.Router();
router.post("/", getRecipesFromIngredients);

export default router;