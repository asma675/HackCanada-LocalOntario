import knex from "knex";
import knexConfig from "../knexfile.js";
import axios from "axios";

const db = knex(knexConfig.development);

export async function generateMealPlan(req, res) {
    const { budget, household_size, diet, location, sustainability_weight } = req.body;

    try {
        // Call Backboard agent
        const response = await axios.post(
            "https://api.backboard.io/v1/agent/meal_planner",
            {
                budget,
                household_size,
                diet,
                location,
                sustainability_weight
            },
            {
                headers: { "Authorization": `Bearer ${process.env.BACKBOARD_API_KEY}` }
            }
        );

        const meals = response.data.meals;
        const total_cost = response.data.total_estimated_cost;

        // Save to DB
        await db("meal_plans").insert({
            meals: JSON.stringify(meals),
            total_cost
        });

        res.json({ meals, total_estimated_cost: total_cost });
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Failed to generate meal plan" });
    }
}