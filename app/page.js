import Gallery from "./gallery";
import SingleRecipe from "./single-recipe";

export default function Page() {
    return (
        <main>
            <header>
                <h1>Random Recipes</h1>
                <h2>from API Ninjas</h2>
            </header>
            {/* <SingleRecipe /> */}
            <Gallery />
        </main>
    );
}
