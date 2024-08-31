import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const { recipes, status } = useSelector((state) => state.recipes);

  if (status == "loading") {
    return <div>Loading....</div>;
  }

  if (status == "failed") {
    return <div>Failed to load recipes.</div>;
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
