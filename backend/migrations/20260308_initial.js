/**
 * 20260308_initial.js
 */
export async function up(knex) {
    await knex.schema.createTable("meal_plans", table => {
        table.increments("id").primary();
        table.json("meals");
        table.float("total_cost");
        table.timestamps(true, true);
    });

    await knex.schema.createTable("grocery_lists", table => {
        table.increments("id").primary();
        table.json("categories");
        table.float("total_cost");
        table.timestamps(true, true);
    });

    await knex.schema.createTable("recipe_searches", table => {
        table.increments("id").primary();
        table.json("ingredients");
        table.json("recipes");
        table.timestamps(true, true);
    });
}

export async function down(knex) {
    await knex.schema.dropTable("recipe_searches");
    await knex.schema.dropTable("grocery_lists");
    await knex.schema.dropTable("meal_plans");
}