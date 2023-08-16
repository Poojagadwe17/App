import React from 'react';
import styles from './Details.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const { movieId } = useParams();
  const movies = useSelector((state) => state.movies);
  const selectedMovie = movies.find((movie) => movie.id.toString() === movieId);

  if (!selectedMovie) {
    return <div className={styles.Notfound}>Movie not found</div>;
  }

  const { title, poster_path, overview, vote_average, release_date } = selectedMovie;
  const cleanedDescription = overview.trim().replace(/\s+/g, ' ');
  //const cast = credits.cast;
  //const director = credits.crew.find(member => member.job === 'Director');

  //const actorsList = cast.filter(actor => actor !== director).map(actor => actor.name).join(', ');

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.poster}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      </div>
      <div className={styles.info}>
        <div className={styles.titleRating}>
          <h4 className={styles.title}>{title}</h4>
          <h4 className={styles.rating}>({vote_average})</h4>
        </div>
        <div className={styles.detailsRow}>
          <p className={styles.year}>{release_date}</p>
          <p className={styles.length}>Not Available</p>
          <p className={styles.director}>Not Available</p>
        </div>
        <div className={styles.cast}>Cast: Not Available</div>
        <div className={styles.description}>Description:{cleanedDescription}</div>
      </div>
    </div>
  );
};

export default Details;
