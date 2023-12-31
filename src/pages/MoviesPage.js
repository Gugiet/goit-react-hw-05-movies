import s from './MoviesPage.module.css';

import { useState, useEffect } from 'react';
import { searchMovies } from '../services/movies-api';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Notiflix from 'notiflix';

const MoviesPage = () => {
  const [movieToFind, setMovieToFind] = useState('');
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const searchString = new URLSearchParams(location.search).get('query');

    if (searchString) {
      const getMovies = async () => {
        const { results } = await searchMovies(searchString);

        setMovies(results);
        setMovieToFind(searchString);

        console.log(searchString);
      };

      getMovies();
    }
  }, [location.search]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (movieToFind.trim()) {
      const { results } = await searchMovies(movieToFind);

      setMovies(results);
      setMovieToFind('');

      if (results.length === 0) {
        Notiflix.Notify.warning(
          'No movies found! Please change your request and try again'
        );
      }

      history.push({
        ...location,
        search: `query=${movieToFind}`,
      });
    }
  };

  return (
    <>
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={handleSubmit}>
          <input
            onChange={e => setMovieToFind(e.target.value)}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={movieToFind}
          />
          <button type="submit" className={s.searchFormButton}>
            search
          </button>
        </form>
      </header>
      {movies.length > 0 &&
        movies.map(({ id, title }) => (
          <ul>
            <li key={id}>
              <Link
                to={{
                  pathname: `/movies/${`${id}`}`,
                  state: {
                    from: {
                      location,
                    },
                  },
                }}
              >
                <p>{title}</p>
              </Link>
            </li>
          </ul>
        ))}
    </>
  );
};

export default MoviesPage;
