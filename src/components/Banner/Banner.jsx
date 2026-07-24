import { useEffect, useState } from "react";
import requests from "../../api/Requests";
import instance from "../../api/Axios";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styles from "./Banner.module.css";

const Banner = () => {
  const [movie, setMovie] = useState({});

  const truncate = (text, maxLength) => {
    return text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await instance.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ],
        );
      } catch (error) {
        console.error("Error fetching banner movie:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles.banner_contents}>
        <h1 className={styles.banner_title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className={styles.banner_buttons}>
          <button className={`${styles.banner_button} ${styles.play_button}`}>
            <FaPlay /> Play
          </button>
          <button className={`${styles.banner_button} ${styles.info_button}`}>
            <AiOutlineInfoCircle /> More Info
          </button>
        </div>

        <h1 className={styles.banner_description}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={styles.banner_fadeBottom}></div>
    </header>
  );
};

export default Banner;
