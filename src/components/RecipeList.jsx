import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const { recipes, status, error } = useSelector((state) => state.recipes);

  if (status === "loading") {
    return <p>Loading...</p>; 
  }

  if (status === "failed") {
    return <p>Error: {error}</p>; 
  }

  if (status === "succeeded" && recipes.length === 0) {
    return <p>This item is not available.</p>; // Show no results state
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
