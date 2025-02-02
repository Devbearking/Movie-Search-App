import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "@/types";

interface FavoritesState {
  movies: Movie[];
}

// Ensure localStorage is accessed only on the client
const getFavoritesFromStorage = (): Movie[] => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  }
  return [];
};

const initialState: FavoritesState = {
  movies: getFavoritesFromStorage(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("favorites", JSON.stringify(state.movies));
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("favorites", JSON.stringify(state.movies));
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
