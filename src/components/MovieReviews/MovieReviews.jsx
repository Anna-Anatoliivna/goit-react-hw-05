import { useParams } from 'react-router-dom';
import styles from './MovieReviews';
import { useEffect, useState } from 'react';
import { getReviewsById } from '../../api/moviesApi';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

const MovieReviews = () => {
const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchReview = async () => {
    setIsLoading(true);
      setError(null);
      try {
    const data = await getReviewsById(movieId);
    console.log(data.results);
    setReviews(data.results);
  } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
  fetchReview();
}, [movieId]);
console.log(reviews);


  return (
    <div className={styles.box}>
      {isLoading && <Loader />}
      {error && (
        <ErrorMessage textAlign="center">
          Something went wrong - {error}
        </ErrorMessage>
      )}
      {reviews && <ul className={styles.list}>
        {reviews.map(review => (
          <li key={review.id} className={styles.item}>
            <h3 className={styles.title}>Author: {review.author}</h3>
            <p className={styles.text}> {review.content}</p>
          </li>
        ))}
      </ul>}
    </div>
  );
}

export default MovieReviews