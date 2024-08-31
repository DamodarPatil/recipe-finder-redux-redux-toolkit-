import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../features/recipesSlice";
import favoritesReducer from "../features/favoritesSlice";

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    favorites: favoritesReducer,
  },
});
export default store;
