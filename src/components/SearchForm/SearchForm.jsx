import { useState } from 'react';
import styles from './SearchForm.module.css';



export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      console.log('error');
    }
    onSubmit(query);
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        autoComplete="off"
        autoFocus
      />
      <button className={styles.btn} type="submit">
        Search
      </button>
    </form>
  );
};
