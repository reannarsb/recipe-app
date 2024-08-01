"use client";

import { useEffect, useState } from "react";
import Recipe from "./recipe";

export default function SingleRecipe() {
    const [singleRecipe, setSingleRecipe] = useState(null);

    async function fetchSingleRecipe() {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/recipe?id=12345&api_key=YOUR_API_KEY`);
            const data = await response.json();
            setSingleRecipe(data[0]);
        } catch (error) {
            console.error(`Error fetching recipe: ${error.message}`);
        }
    }

    useEffect(() => {
        fetchSingleRecipe();
    }, []);

    return (
        <div className="single-recipe-container">
            {singleRecipe && <Recipe recipe={singleRecipe} />}
        </div>
    );
}
