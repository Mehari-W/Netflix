import { useEffect, useState } from "react";
import styles from "./Row.module.css";
import instance from "../../../api/Axios";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

 
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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1, 
    },
  };


  const handleClick = (movie) => {
    if (trailerUrl) {
      
      setTrailerUrl("");
    } else {

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

     
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;