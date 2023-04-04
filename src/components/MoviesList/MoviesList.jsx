import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { MoviesListContainer } from './MoviesList.styled';

const MoviesList = ({ trending }) => {
  const location = useLocation();

  return (
    <MoviesListContainer>
      <ul>
        {trending.map(({ title, name, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {name ?? title}
              </Link>
            </li>
          );
        })}
      </ul>
    </MoviesListContainer>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  trending: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};
