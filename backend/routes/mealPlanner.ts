import express from "express";
import { generateMealPlan } from "../controllers/mealPlannerController.js";
const router = express.Router();

router.post("/", generateMealPlan);

export default router;