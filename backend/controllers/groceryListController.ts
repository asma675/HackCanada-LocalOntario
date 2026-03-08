import knex from "knex";
import knexConfig from "../knexfile.js";
import axios from "axios";

const db = knex(knexConfig.development);

export async function generateGroceryList(req, res) {
    const { ingredients } = req.body;

    try {
        const response = await axios.post(
            "https://api.backboard.io/v1/agent/grocery_list",
            { ingredients },
            { headers: { "Authorization": `Bearer ${process.env.BACKBOARD_API_KEY}` } }
        );

        const { categories, total_cost, savings_from_local } = response.data;

        await db("grocery_lists").insert({
            categories: JSON.stringify(categories),
            total_cost
        });

        res.json({ categories, total_cost, savings_from_local });
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Failed to generate grocery list" });
    }
}