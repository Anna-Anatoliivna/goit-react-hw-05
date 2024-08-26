import { useParams } from 'react-router-dom';
import styles from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { getCastById } from '../../api/moviesApi';


const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);


  useEffect(() => {
    const fetchCast = async () => {
            const data = await getCastById(movieId);
        console.log(data);
       setMovieCast(data);
          };
    fetchCast();
  }, [movieId]);
  console.log(movieCast);

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {movieCast.map(cast => (
          <li key={cast.id} className={styles.item}>
            <img
              src={'https://image.tmdb.org/t/p/w500' + `${cast.profile_path}`}
              alt={cast.name}
            />
            <h3 className={styles.title}>Actor: {cast.name}</h3>
            <p className={styles.text}>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast