import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import styles from "../styles/Dropdown.module.scss";
import MovieItem from "./MovieItem";

const Dropdown = () => {
  const { popularMovies } = useContext(AppContext);
  const [isActive, setIsActive] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleSelect = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menuContainer}>
        <div onClick={handleClick} className={styles.menuTrigger}>
          <p>
            VER: <span> POPULARES</span>
          </p>
        </div>
        <nav
          ref={dropdownRef}
          className={isActive ? styles.menu + " " + styles.active : styles.menu}
        >
          <ul>
            <li onClick={() => handleSelect()}>POPULARES </li>
            <li onClick={() => handleSelect()}>mis películas</li>
          </ul>
        </nav>
      </div>
      <div className={styles.movieList}>
        {popularMovies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
