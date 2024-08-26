import {
  useEffect,
  useRef,
  useState
} from "react";
import { fetchMovieDetail } from "../api/moviesApi";
import {
  useLocation,
  useParams
} from "react-router-dom";
import Loader from "../components/Loader/Loader";
import { Container } from "../components/Container/Container";
import { GoBackBtn } from '../components/GoBackBtn/GoBackBtn';
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import MovieInfo from "../components/MovieInfo/MovieInfo";


const MovieDetailsPage = () => {
  const { movieId } = useParams();
    
  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const goBack = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const fetchDataDetail = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchMovieDetail(movieId);
        // console.log(data);

        setMovieDetail(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDataDetail();
  }, [movieId]);
    

  return (
    <div>
      <Container>
        <GoBackBtn path={goBack.current}>Go Back </GoBackBtn>
        {isLoading && <Loader />}
        {error && (
          <ErrorMessage textAlign="center">
            Something went wrong - {error}
          </ErrorMessage>
        )}
        {movieDetail && <MovieInfo {...movieDetail} />}
      </Container>
    </div>
  );
}

export default MovieDetailsPage