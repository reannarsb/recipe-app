import Image from "./image";
import SingleRecipe from "./single-recipe";

export default function Page() {
    return (
        <main className="p-8">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Recipe Finder</h1>
                <h2 className="text-2xl">Discover delicious recipes</h2>
            </header>
            {/* <SingleRecipe /> */}
            <Image />
        </main>
    );
}

