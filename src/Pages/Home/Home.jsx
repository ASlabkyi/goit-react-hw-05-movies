// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';

import { getTrending } from 'services/moviesServices';

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
    <div>
      <h2>Trending today</h2>
      <MoviesList trending={trending} />
    </div>
  );
};

export default Home;
