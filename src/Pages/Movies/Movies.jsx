import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesList from 'components/MoviesList/MoviesList';

import { getMovieByName } from 'services/moviesServices';

import { MoviesContainer } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    const { value } = e.target;
    setMovieName(value);
  };

  const handleMovieSubmit = e => {
    e.preventDefault();

    setSearchParams(movieName !== '' ? { query: movieName } : {});
  };

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    try {
      getMovieByName(query).then(resp => setMovies(resp.results));
    } catch (error) {
      alert(error.message);
    }
  }, [searchParams]);

  return (
    <MoviesContainer>
      <form onSubmit={handleMovieSubmit}>
        <input onChange={handleChange} value={movieName} type="text" />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MoviesList trending={movies} />}
    </MoviesContainer>
  );
};

export default Movies;
