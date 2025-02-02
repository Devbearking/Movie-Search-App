"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFavorite } from "@/redux/favoritesSlice";
import Image from "next/image";
import Link from "next/link";

export default function FavoritesList() {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(
    (state: RootState) => state.favorites.movies
  );

  if (favoriteMovies.length === 0) {
    return (
      <h1 className="text-3xl text-center text-black">
        No favorite movies yet.
      </h1>
    );
  }

  return (
    <div className="min-h-screen text-black flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Your Favorite Movies
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-5xl">
        {favoriteMovies.map((movie) => (
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
                className="w-full h-64 object-cover rounded-lg"
              />
            </Link>
            <h2 className="text-lg text-gray-700 font-semibold mt-2">{movie.title}</h2>
            <p className="text-gray-700 text-sm">
              {movie.release_date?.slice(0, 4)}
            </p>
            <button
              className="absolute top-2 right-2 p-2 rounded-full bg-red-400 text-white"
              onClick={() => dispatch(removeFavorite(movie.id))}
            >
              ✖︎
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
