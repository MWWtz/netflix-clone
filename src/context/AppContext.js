import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const URLMovie =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20";

const URLPOPULAR =
  "https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20";

export const AppProvider = ({ children }) => {
  const [playingNow, setPlayingNow] = useState({});
  const [popularMovies, setPopularMovies] = useState([]);
  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesLS = window.localStorage.getItem("my-movies");
        if (moviesLS) {
          setMyMovies(moviesLS);
        }
        const res = await fetch(URLMovie);
        const data = await res.json();
        setPlayingNow(data.results[0]);

        //popular Movies
        const res2 = await fetch(URLPOPULAR);
        const movies = await res2.json();
        setPopularMovies(movies.results.slice(0, 4));
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  const saveMyMovie = (movie) => {
    const newList = [...myMovies, movie];
    localStorage.setItem("my-movies", JSON.stringify(newList));
    setMyMovies(newList);
  };

  return (
    <AppContext.Provider
      value={{ popularMovies, playingNow, myMovies, saveMyMovie }}
    >
      {children}
    </AppContext.Provider>
  );
};
