import { useEffect, useState } from 'react';
import { fetchTrendMovie } from '../api/moviesApi';
import Loader from '../components/Loader/Loader';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import { Container } from '../components/Container/Container';
import MoviesList from '../components/MoviesList/MoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchTrendMovie();
        console.log(data);

        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage textAlign="center">
          Something went wrong - {error}
        </ErrorMessage>
      )}
      {movies && <MoviesList movies={movies} />}
    </Container>
  );
};

export default HomePage;
