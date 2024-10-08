import { useEffect, useState } from 'react';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';
import MovieList from '../components/MovieList/MovieList';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { fetchSearchMovie } from '../api/moviesApi';
import { Container } from '../components/Container/Container';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const fetchDataByQuery = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchSearchMovie(query);
        console.log(data.results);
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataByQuery();
  }, [query]);
  
  const onSubmit = query => {
    setSearchParams({ query: query });
  };
  return (
    <div>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {movies.length > 0 && <MovieList movies={movies} />}
        {isLoading && <Loader />}
        {error && (
          <ErrorMessage textAlign="center">
            Something went wrong - {error}
          </ErrorMessage>
        )}
      </Container>
    </div>
  );
};
export default MoviesPage;
