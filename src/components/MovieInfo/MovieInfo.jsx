import styles from './MovieInfo.module.css';

const MovieInfo = ({title, original_title, genres = [], overview, runtime }) => {
    return (
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
          alt={title}
        />
        <h1 className={styles.title}>{original_title}</h1>
        <p className={styles.accent}>
          Overview: <span className={styles.details} >{overview}</span>
        </p>
        <p className={styles.details}>
          Genres: <span>{genres.join(', ')}.</span>
        </p>
        <p>
          Runtime: <span className={styles.accent}>{runtime}</span>
        </p>
      </div>
    );
};

export default MovieInfo;
