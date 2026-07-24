import { useEffect, useState, useMemo } from "react";
import styles from "./Row.module.css";
import instance from "../../../api/Axios";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const imgBase = "https://image.tmdb.org/t/p";
  const imgSize = isLargeRow ? "w342" : "w500";

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

  const opts = useMemo(
    () => ({
      height: "390",
      width: "100%",
      playerVars: { autoplay: 1 },
    }),
    []
  );

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
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
        {movies.map((movie) => {
          const imgPath = isLargeRow ? movie.poster_path : movie.backdrop_path;
          if (!imgPath) return null;
          return (
            <img
              key={movie.id}
              loading="lazy"
              onClick={() => handleClick(movie)}
              className={`${styles.row__poster} ${
                isLargeRow ? styles.row__posterLarge : ""
              }`}
              src={`${imgBase}/${imgSize}${imgPath}`}
              alt={movie.name || movie.title}
            />
          );
        })}
      </div>

      {trailerUrl && (
        <div className={styles.row__trailer}>
          <Youtube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

const Youtube = ({ videoId, opts }) => {
  const [YoutubeComp, setYoutubeComp] = useState(null);

  useEffect(() => {
    import("react-youtube").then((mod) => setYoutubeComp(() => mod.default));
  }, []);

  if (!YoutubeComp) return null;
  return <YoutubeComp videoId={videoId} opts={opts} />;
};

export default Row;
