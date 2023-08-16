import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/NavBar';
import styles from './App.module.css';
import MovieCard from './components/MovieCard';
import Details from './components/Details';
import axios from 'axios';
import { useSelector } from 'react-redux';

const API_KEY = 'e42f27470159a22e1f9394ec4b0f2326';
const API_URL = 'https://api.themoviedb.org/3';

function App() {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`);
        store.dispatch({ type: 'SET_MOVIES', payload: response.data.results });
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className={styles.app}>
          <Navbar />
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/details/:movieId" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

const MovieList = () => {
  const searchQuery = useSelector((state) => state.searchQuery);
  const filteredMovies = useSelector((state) =>
    state.movies.filter((movie) => movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <div className={styles.cardContainer}>
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} title="Movie List" showSearch={true} />
        ))}
      </div>
    </div>
  );
};

export default App;
