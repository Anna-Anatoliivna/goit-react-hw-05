import { Link, Outlet } from 'react-router-dom';
import styles from './MovieInfo.module.css';

const MovieInfo = ({
  title,
  original_title,
  genres = [],
  overview,
  runtime,
  poster_path,
}) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src={'https://image.tmdb.org/t/p/w500' + `${poster_path}`}
        alt={title}
      />
      <h1 className={styles.title}>{original_title}</h1>
      <p className={styles.details}>
        Overview: <span className={styles.text}>{overview}</span>
      </p>
      <p className={styles.details}>
        Genres:{' '}
        <span className={styles.text}>
          {genres.map(genre => (
            <span key={genre.id}>{genre.name}, </span>
          ))}
        </span>
      </p>
      <p className={styles.details}>
        Runtime: <span className={styles.text}>{runtime} minutes</span>
      </p>
      <p className={styles.details}>Additional information</p>
      <div className={styles.list}>
        <Link to="cast">Cast</Link>
      </div>
      <div className={styles.list}>
        <Link to="reviews">Reviews</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieInfo;
