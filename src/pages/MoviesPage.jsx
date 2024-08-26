import { useEffect, useState } from 'react';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';
import Loader from '../components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { fetchSearchMovie } from '../api/moviesApi';
import { Container } from '../components/Container/Container';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [movieList, setmovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchSearchMovie();
        console.log(data);
        setmovieList(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const onSubmit = query => {
    setSearchParams(query);
  };
  return (
    <div>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {<MoviesList movieList={movieList} />}
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
