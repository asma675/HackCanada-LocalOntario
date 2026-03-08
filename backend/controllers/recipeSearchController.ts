import knex from "knex";
import knexConfig from "../knexfile.js";
import axios from "axios";

const db = knex(knexConfig.development);

export async function getRecipesFromIngredients(req, res) {
    const { ingredients } = req.body;

    try {
        const response = await axios.post(
            "https://api.backboard.io/v1/agent/recipe_search",
            { ingredients },
            { headers: { "Authorization": `Bearer ${process.env.BACKBOARD_API_KEY}` } }
        );

        const recipes = response.data.recipes;

        await db("recipe_searches").insert({
            ingredients: JSON.stringify(ingredients),
            recipes: JSON.stringify(recipes)
        });

        res.json({ recipes });
    } catch (err) {
        console.error(err.response?.data || err.message);
        res.status(500).json({ error: "Failed to fetch recipes" });
    }
}