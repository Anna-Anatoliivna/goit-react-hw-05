import axios from 'axios';

const url =
  'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    // Замість api_read_access_token вставте свій токен
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMGI2MjY4MTU1YTVhZmJmYTI1OGZiNTY4NWEyYTVlMiIsIm5iZiI6MTcyNDE4Njk5Mi4xOTYyMzQsInN1YiI6IjY2YzRmYTIzMWVlNjUxOWYxZTk3MGUyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.doRMcTtbhhLACuwln4XgBaE8dDkWtm3KuZsClMiq5sY',
  },
};

axios
  .get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));
