import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + '...';
};

const MovieCard = ({ movie }) => {
  const truncatedDescription = truncateText(movie.overview, 60);

  return (
    <div className={styles.card}>
      <Link to={`/details/${movie.id}`} className={styles.cardLink}>
        <div className={styles.poster}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
      </Link>
      <div className={styles.detailsContainer}>
        <div className={styles.titleContainer}>
        <h3 className={styles.title}>{movie.title}</h3>
        <p className={styles.rating}> ({movie.vote_average})</p>
        </div>
      <div className={styles.description}>{truncatedDescription}</div>
    </div>
    </div>
  );
};

export default MovieCard;
