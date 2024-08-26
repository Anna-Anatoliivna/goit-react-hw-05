import { useParams } from 'react-router-dom';
import styles from './MovieReviews';
import { useEffect, useState } from 'react';
import { getReviewsById } from '../../api/moviesApi';

const MovieReviews = () => {
const { movieId } = useParams();
const [reviews, setReviews] = useState(null);

useEffect(() => {
  const fetchReview = async () => {
    const data = await getReviewsById(movieId);
    console.log(data);
    setReviews(data);
  };
  fetchReview();
}, [movieId]);
console.log(reviews);


  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {reviews.map(review => (
          <li key={review.id} className={styles.item}>
            <h3 className={styles.title}>Author: {review.author}</h3>
            <p className={styles.text}> {review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieReviews