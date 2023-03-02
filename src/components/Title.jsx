import React from "react";
import plus from "../assets/plus.svg";
import play from "../assets/play.svg";
import styles from "../styles/Title.module.scss";
const Title = ({ kicker, title }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.kicker}>{kicker}</h3>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.options}>
        <div className={styles.play}>
          <img src={play} width={10} height={13} alt="play" />
          Reproducir
        </div>
        <div className={styles.mylist}>
          <img src={plus} width={10} height={13} alt="add" />
          mi lista
        </div>
      </div>
    </div>
  );
};

export default Title;
