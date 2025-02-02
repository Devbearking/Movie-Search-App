const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
import { Movie } from "@/types";

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Failed to fetch movies");
    }
    const data = await response.json();
    return data.results as Movie[];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};


export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
