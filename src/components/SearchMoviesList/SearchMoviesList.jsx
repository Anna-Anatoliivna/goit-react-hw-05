import { Link } from "react-router-dom";
import styles from './SearchMoviesList.css';


const SearchMoviesList = ({ movieList }) => {
  return (
    <ul className={styles.list}>
      {movieList.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title} </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SearchMoviesList;