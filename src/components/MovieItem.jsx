import React from "react";
import playcircle from "../assets/Playcircle.svg";

import styles from "../styles/MovieItem.module.scss";

const MovieItem = ({ movie }) => {
  const { title, backdrop_path } = movie;
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}
        alt="poster"
      />
      <div className={styles.playGroup}>
        <img className={styles.play} src={playcircle} alt="play" />
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default MovieItem;
