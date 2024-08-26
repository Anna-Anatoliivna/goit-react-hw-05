import { useParams } from 'react-router-dom';
import styles from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { getCastById } from '../../api/moviesApi';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getCastById(movieId);
        console.log(data.cast);
        setCasts(data.cast);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);
  console.log(casts);

  return (
    <div className={styles.box}>
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage textAlign="center">
          Something went wrong - {error}
        </ErrorMessage>
      )}
      {casts && <ul className={styles.list}>
        {casts.map(cast => (
          <li key={cast.id} className={styles.item}>
            <img
              src={'https://image.tmdb.org/t/p/w500' + `${cast.profile_path}`}
              width={200}
              alt={cast.name}
            />
            <h3 className={styles.title}>Actor: {cast.name}</h3>
            <p className={styles.text}>Character: {cast.character}</p>
          </li>
        ))}
      </ul>}
    </div>
  );
};

export default MovieCast;
