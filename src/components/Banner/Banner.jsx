import { useEffect, useState } from "react";
import requests from "../../api/Requests";
import instance from "../../api/Axios";
import styles from "./Banner.module.css";

const Banner = () => {
  let truncate = (text, maxLength) => {
    return text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  let [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        let request = await instance.get(requests.fetchNetflixOriginals);
        console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ],
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <>
      <div
        className={styles["banner"]}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition: "center",
        }}
      >
        <div className={styles["banner_contents"]}>
          <h1 className={styles["banner_title"]}>
            {movie?.title || movie?.name || movie.origional_name}
          </h1>
        </div>
        <div className={styles["banner_buttons"]}>
          <button className={styles["banner_button play"]}>Play</button>
          <button className={styles["banner_button"]}>My List</button>
        </div>
        <h1 className={styles["banner_description"]}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className={styles["banner_fadebottom"]}></div>
    </>
  );
};

export default Banner;
