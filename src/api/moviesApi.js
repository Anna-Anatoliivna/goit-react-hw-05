import Axios from 'axios';

const tokenKey =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGI2MjY4MTU1YTVhZmJmYTI1OGZiNTY4NWEyYTVlMiIsIm5iZiI6MTcyNDE4Njk5Mi4xOTYyMzQsInN1YiI6IjY2YzRmYTIzMWVlNjUxOWYxZTk3MGUyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.doRMcTtbhhLACuwln4XgBaE8dDkWtm3KuZsClMiq5sY';

const axios = Axios.create({
  baseUrl: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${tokenKey}`,
    accept: 'aplication/json',
  },
});
const apiPath = {
  trend: '/trending/movie/day?',
  movie: '/movie',
  search: '/search/movie',
};

export const fetchTrendMovie = async () => {
  const response = await axios.get(apiPath.trend, {});
  return response.data;
};

export const fetchSearchMovie = async (query, page = 1) => {
  const response = await axios.get(apiPath.search, {
    params: {
    query,
      page,
    },
  });
  return response.data;
};

// axios
//   .get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
