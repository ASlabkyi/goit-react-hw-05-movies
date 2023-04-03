import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCastById } from 'services/moviesServices';

const Cast = () => {
  const [movieCast, setMovieCast] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const getCast = await getCastById(movieId);
        setMovieCast(getCast);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <ul>
        {movieCast.cast?.map(
          ({ id, character, name, profile_path: profilePath }) => (
            <li key={id}>
              {profilePath && (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profilePath}`}
                  alt={name}
                />
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Cast;
