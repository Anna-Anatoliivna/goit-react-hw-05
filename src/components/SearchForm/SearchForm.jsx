import { useState } from 'react';
import styles from './SearchForm.module.css';



export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  
  const handleSubmmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmmit}>
      <button className={styles.button} type="submit">
            </button>
    </form>
  );
};
