import { useEffect, useState } from "react";
import styles from "./Row.module.css";
import instance from "../../../api/Axios";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  // Fetch movie data from TMDB when the component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await instance.get(fetchUrl);
        setMovies(request.data.results || []);
      } catch (error) {
        console.error("Error fetching data from TMDB:", error);
      }
    };
    fetchData();
  }, [fetchUrl]);

  // Options configuration for the YouTube player
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1, // Auto-plays the video when it loads
    },
  };

  // Handles clicking a movie poster to fetch/toggle the YouTube trailer
  const handleClick = (movie) => {
    if (trailerUrl) {
      // If a trailer is already open, clicking any movie closes it
      setTrailerUrl("");
    } else {
      // Look for the movie trailer using its name, title, or original name
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          // Extract the video ID from the full YouTube URL
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log("Trailer not found or error:", error));
    }
  };

  return (
    <div className={styles.row}>
      <h2>{title}</h2>

      {/* Container for the horizontally scrolling posters */}
      <div className={styles.row__posters}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`${styles.row__poster} ${
              isLargeRow ? styles.row__posterLarge : ""
            }`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name || movie.title}
          />
        ))}
      </div>

      {/* Render the YouTube component only if a trailer URL exists */}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;