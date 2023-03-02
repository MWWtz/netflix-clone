import React, { useContext } from "react";
import TopNavbar from "../../components/TopNavbar";
import Title from "../../components/Title";
import Dropdown from "../../components/Dropdown";
import { AppContext } from "../../context/AppContext";

import styles from "../../styles/HomePage.module.scss";

export default function HomePage() {
  const { playingNow } = useContext(AppContext);
  const { title, original_title, poster_path, backdrop_path } = playingNow;

  return (
    <div className={styles.container}>
      <TopNavbar />
      <div className={styles.main}>
        <img
          className={styles.playingNowDesktop}
          src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          alt="bg"
        />
        <img
          className={styles.playingNowMobile}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="bg"
        />
        <Title kicker={original_title} title={title} />
        <Dropdown />
      </div>
    </div>
  );
}
