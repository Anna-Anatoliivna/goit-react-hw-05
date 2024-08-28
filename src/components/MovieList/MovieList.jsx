import { Link, useLocation } from "react-router-dom";
import styles from './MovieList.module.css';


const MovieList = ({ movies }) => {
  const location = useLocation();
  console.log(location);

  return (
    <ul className={styles.list}>
      {movies.map(({ id, title }) => 
    {return (
      <li key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {title}
        </Link>
      </li>
    );})}
</ul>
);
};

export default MovieList