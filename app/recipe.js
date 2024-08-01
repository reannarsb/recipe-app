export default function Recipe({ recipeObj }) {
    const {
        title,
        ingredients,
        instructions,
        servings
    } = recipeObj;
  
    return (
        <div className="mx-20 my-10 p-5 bg-green-400 rounded">
            <h3 className="text-lg">{title}</h3>
            <ul>
                <li><b>Servings:</b> {servings}</li>
                <li><b>Ingredients:</b> {ingredients.join(", ")}</li>
                <li><b>Instructions:</b> {instructions}</li>
            </ul>
        </div>
    );
  }