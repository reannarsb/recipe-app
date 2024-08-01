"use client";

import { useEffect, useState } from "react";
import Recipe from "./recipe";

export default function SingleRecipe() {
    const [singleRecipe, setSingleRecipe] = useState(null);

    async function getRecipeById() {
        try {
            const response = await fetch("https://api.api-ninjas.com/v1/recipe");
            const data = await response.json();
            setSingleRecipe(data);
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect(() => { getRecipeById(); }, []);

    return (
        <div>
            {singleRecipe && (
                <Recipe recipeObj={singleRecipe} />
            )}
        </div>
    );
}
