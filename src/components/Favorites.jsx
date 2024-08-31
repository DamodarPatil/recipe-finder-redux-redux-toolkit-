import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/favoritesSlice";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (recipe) => {
    dispatch(removeFavorite(recipe));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Favorites</h2>
      <div>
        {favorites.map((recipe) => (
          <div key={recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded-t"
            />
            <h2 className="mt-2 text-xl font-black">{recipe.title}</h2>
            <button
              onClick={() => handleRemoveFavorite(recipe)}
              className="mt-2 px-2 py-2 bg-red-500 text-white rounded"
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
