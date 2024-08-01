export default function Recipe({ recipe }) {
    const {
        title,
        ingredients,
        instructions,
        servings
    } = recipe;

    return (
        <div className="recipe-card p-4 m-4 bg-yellow-200 rounded shadow-lg">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="my-2"><strong>Servings:</strong> {servings}</p>
            <p className="my-2"><strong>Ingredients:</strong> {ingredients.join(", ")}</p>
            <p className="my-2"><strong>Instructions:</strong> {instructions}</p>
        </div>
    );
}
