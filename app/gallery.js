"use client";
import { useEffect, useState } from "react";
import Recipe from "./recipe";

export default function Gallery() {

    const [recipeIds, setRecipeIds] = useState([]);
    const [galleryDisplay, setGalleryDisplay] = useState([]);

    async function getRecipeIds() {
        try {
            const response = await fetch(
                "your-api"
            );
            const data = await response.json();
            const shuffled = data.sort(() => 0.5 - Math.random()).slice(0, 10);
            setRecipeIds(shuffled);
        } catch (error) {
            console.log(`Error ${error.message}`);
        }
    }

    async function getRecipeById(recipe) {
        try {
            const response = await fetch(
                `your-api`
            );
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
    }

    useEffect(() => {
        getRecipeIds();
    }, []);

    useEffect(() => {
        (async () => {
            if (recipeIds.length > 0) {
                let thisGallery = [];
                for (let i = 0; i < recipeIds.length; i++) {
                    let thisRecipe = await getRecipeById(recipeIds[i]);
                    thisGallery.push(thisRecipe);
                }
                setGalleryDisplay(thisGallery);
            }
        })();
    }, [recipeIds]);

    return (
        <div>
            {galleryDisplay.map((recipe) => (
                <Recipe key={recipe.id} recipeObj={recipe} />
            ))}
        </div>
    );
}
