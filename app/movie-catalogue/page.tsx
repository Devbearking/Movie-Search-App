"use client";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/redux/favoritesSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { fetchMovies } from "@/utils/tmdbApi";
import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types";

interface CataloguePageProps {
  movies: Movie[];
}

export default function MovieCatalogue({ movies = [] }: CataloguePageProps) {
  const [query, setQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setError("");

    try {
      const results = await fetchMovies(query);
      setSearchedMovies(results);
    } catch {
      setError("Failed to fetch movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.movies);

  const isFavorite = (id: number) => favorites.some((movie) => movie.id === id);
  const movieList = searchedMovies.length > 0 ? searchedMovies : movies;

  return (
    <div className="min-h-screen text-black flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Browse Movies</h1>
      <form onSubmit={handleSearch} className="w-full max-w-lg flex ">
        <input
          type="text"
          placeholder="Search Title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-3 text-black rounded-l-lg focus:outline-none bg-gray-300"
        />
        <button
          type="submit"
          className="bg-lime-500 hover:bg-yellow-500 text-white px-6 py-3 rounded-r-lg transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-black">Loading...</p>}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-5xl">
        {movieList.map((movie) => (
          <div
            key={movie.id}
            className="bg-orange-100 p-4 rounded-lg shadow-lg relative"
          >
            <Link href={`/movie-catalogue/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={500}
                height={750}
                className="w-full h-fit object-cover rounded-lg"
              />
            </Link>
            <h2 className="text-lg text-gray-700 font-semibold mt-2">{movie.title}</h2>
            <p className="text-gray-700 text-sm">
              {movie.release_date?.slice(0, 4)}
            </p>
            <button
              className={`absolute top-2 right-2 p-2 rounded-full text-white ${
                isFavorite(movie.id) ? "bg-red-400" : "bg-green-600"
              }`}
              onClick={() =>
                isFavorite(movie.id)
                  ? dispatch(removeFavorite(movie.id))
                  : dispatch(addFavorite(movie))
              }
            >
              {isFavorite(movie.id) ? "❤️" : "🤍"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
