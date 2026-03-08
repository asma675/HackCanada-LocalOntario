import express from "express";
import { generateGroceryList } from "../controllers/groceryListController.js";

const router = express.Router();
router.post("/", generateGroceryList);

export default router;