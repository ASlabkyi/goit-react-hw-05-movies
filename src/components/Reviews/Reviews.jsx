import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getReviewsById } from 'services/moviesServices';

import { ReviewsWrapper } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMoviesReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const getReviews = await getReviewsById(movieId);
        setMoviesReviews(getReviews.results);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <ReviewsWrapper>
      <ul>
        {movieReviews.length > 0
          ? movieReviews.map(({ author, content, id }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))
          : `We don't have any reviews for this movie.`}
      </ul>
    </ReviewsWrapper>
  );
};

export default Reviews;
