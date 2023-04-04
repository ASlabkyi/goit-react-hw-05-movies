import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

import { getMovieById } from 'services/moviesServices';

import {
  Container,
  Poster,
  Title,
  UserScore,
  Overview,
  Genres,
  GenreList,
  GenreItem,
  AdditionalInfo,
  AdditionalInfoList,
  AdditionalInfoItem,
} from './MovieDetails.styled';

const BackLink = styled(Link)`
  margin-bottom: 1rem;
  color: #0077ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  const detailsLink = location.state?.from ?? '/';

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
    <Container>
      <BackLink to={detailsLink} state={{ from: location }}>
        Go back
      </BackLink>
      {posterPath && (
        <Poster
          src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          alt={title ?? name}
        />
      )}

      <Title>{title ?? name}</Title>
      <UserScore>
        User score: {Math.round(voteAverage * 10).toFixed(0) + '%'}
      </UserScore>
      <Overview>Overview</Overview>
      <p>{overview}</p>
      <Genres>Genres</Genres>
      {genres?.length > 0 && (
        <GenreList>
          {genres.map(({ name }, index) => (
            <GenreItem key={index}>{name}</GenreItem>
          ))}
        </GenreList>
      )}
      <AdditionalInfo>Additional information</AdditionalInfo>
      <AdditionalInfoList>
        <AdditionalInfoItem>
          <BackLink to={'cast'} state={{ from: detailsLink }}>
            Cast
          </BackLink>
        </AdditionalInfoItem>
        <AdditionalInfoItem>
          <BackLink to={'reviews'} state={{ from: detailsLink }}>
            Reviews
          </BackLink>
        </AdditionalInfoItem>
      </AdditionalInfoList>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
