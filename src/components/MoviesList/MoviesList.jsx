import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesList = ({ trending }) => {
  return (
    <div>
      <ul>
        {trending.map(({ title, name, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{name ?? title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
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

// state={{ from: location }}
