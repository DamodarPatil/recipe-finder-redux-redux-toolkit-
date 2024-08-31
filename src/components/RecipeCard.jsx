import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addFavorite } from "../features/favoritesSlice";

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavorite(recipe));
  };

  return (
    <div>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-t"
      />
      <h2 className="mt-2 text-xl font-bold">{recipe.title}</h2>
      <button
        onClick={handleAddFavorite}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
      >
        Add to Favorites
      </button>
    </div>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeCard;
