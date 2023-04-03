import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'a72c830feb3ccf91ef26a749a59c55f6',
};

export const getTrending = async () => {
  const { data } = await axios.get('/trending/all/day?');
  return data;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`, {
    params: {
      language: 'en-US',
    },
  });
  return data;
};

export const getCastById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`, {
    params: {
      language: 'en-US',
    },
  });
  return data;
};

export const getReviewsById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`, {
    params: {
      language: 'en-US',
    },
  });
  return data;
};

export const getMovieByName = async movieName => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query: `${movieName}`,
      language: 'en-US',
      page: 1,
      include_adult: false,
    },
  });
  return data;
};
