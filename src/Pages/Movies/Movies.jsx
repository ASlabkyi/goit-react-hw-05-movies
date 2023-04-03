import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import MoviesList from 'components/MoviesList/MoviesList';

import { getMovieByName } from 'services/moviesServices';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);
  const [canLoad, setCanLoad] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const handleChange = e => {
    const { value } = e.target;

    setMovieName(value);
  };

  const handleMovieSubmit = e => {
    e.preventDefault();
    setCanLoad(true);
    setSearchParams({ query: movieName });
    setMovieName('');
  };

  useEffect(() => {
    if (!canLoad) return;
    const fetchMovies = async () => {
      try {
        const getMovies = await getMovieByName(searchParams.get('query'));
        setMovies(getMovies.results);
        setCanLoad(false);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchMovies();
  }, [searchParams, canLoad]);

  return (
    <div>
      <form onSubmit={handleMovieSubmit}>
        <input onChange={handleChange} value={movieName} type="text" />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MoviesList trending={movies} />}
    </div>
  );
};

export default Movies;
