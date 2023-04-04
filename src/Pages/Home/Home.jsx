import { useState, useEffect } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';

import { getTrending } from 'services/moviesServices';

import { HomeContainer } from './Home.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const { results } = await getTrending();
        setTrending(results);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchTrending();
  }, []);

  return (
    <HomeContainer>
      <h2>Trending today</h2>
      <MoviesList trending={trending} />
    </HomeContainer>
  );
};

export default Home;
