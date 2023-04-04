import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCastById } from 'services/moviesServices';

import { CastWrapper } from './Cast.styled';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
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
      <CastWrapper>
        {movieCast.cast?.map(
          ({ id, character, name, profile_path: profilePath }) => (
            <li key={id}>
              {profilePath && (
                <img
                  height="225px"
                  src={`https://image.tmdb.org/t/p/w500/${profilePath}`}
                  alt={name}
                />
              )}
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          )
        )}
      </CastWrapper>
    </div>
  );
};

export default Cast;
