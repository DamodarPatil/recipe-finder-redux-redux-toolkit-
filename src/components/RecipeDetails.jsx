import PropTypes from "prop-types";

const RecipeDetails = ({ recipe }) => {
  if (!recipe) {
    return <div>Select a recipe to see details.</div>;
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover mt-4"
      />

      <p className="mt-4">{recipe.summary}</p>
    </div>
  );
};

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired,
};
export default RecipeDetails;
