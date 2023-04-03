import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { getMovieById } from 'services/moviesServices';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const getData = await getMovieById(movieId);
        setMovieData(getData);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchMovie();
  }, [movieId]);

  const {
    poster_path: posterPath,
    vote_average: voteAverage,
    title,
    name,
    overview,
    genres,
  } = movieData;
  return (
    <div>
      <Link to="/">Go back</Link>
      {posterPath && (
        <img
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={title ?? name}
        />
      )}

      <h1>{title ?? name}</h1>
      <p>User score: {Math.round(voteAverage * 10).toFixed(0) + '%'}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres?.map(({ name }, index) => (
        <p key={index}>{name}</p>
      ))}
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

// {
//   location.state?.from ?? '/';
// }
