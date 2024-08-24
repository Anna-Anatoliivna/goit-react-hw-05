import { Link } from "react-router-dom";
import styles from './MoviesList.module.css';


const MoviesList = ({movies}) => {
  return (
    <ul className={styles.list}>
      {movies.map(({ id, title }) => 
    {return (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title} </Link>
    </li>
  )})}
</ul>
);
};

export default MoviesList