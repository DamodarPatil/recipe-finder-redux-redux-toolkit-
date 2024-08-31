import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../features/recipesSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.recipes);

  const handleSearch = () => {
    if (query) {
      dispatch(fetchRecipes(query));
    }
  };

  return (
    <div className="flex items-center p-4 bg-gray-200">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes...."
        className="p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-1 px-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default SearchBar;
