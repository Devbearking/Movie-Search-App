"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "@/redux/favoritesSlice";
import { RootState } from "@/redux/store";
import { Movie } from "@/types";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.movies);
  const isFavorite = favorites.some((fav) => fav.id === Number(id));

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`);
      const data = await res.json();
      setMovie(data);
    };

    if (id) fetchMovieDetails();
  }, [id]);

  if (!movie) return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center">
      <Image 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt={movie.title} 
        width={400} 
        height={650} 
        className="rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
      <p className="text-gray-400">{movie.release_date}</p>
      <p className="mt-4 max-w-3xl">{movie.overview}</p>
      
      <button
        className={`mt-4 px-6 py-3 rounded-lg ${isFavorite ? "bg-red-600" : "bg-blue-600"} transition`}
        onClick={() => isFavorite ? dispatch(removeFavorite(movie.id)) : dispatch(addFavorite(movie))}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
