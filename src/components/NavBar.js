import React from 'react';
import { Search, Home } from '@mui/icons-material';
import styles from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.searchQuery);

  const setSearchQuery = (query) => {
    dispatch({ type: 'SET_SEARCH_QUERY', payload: query });
  };

  return (
    <nav className={styles.navbar}>
      {location.pathname.includes('/details/') ? (
        <h4>Movie Details</h4>
      ) : location.pathname === '/' ? (
        <div className={styles.searchContainer}>
          <div className={styles.searchIcon}>
            <Search style={{ color: '#4A4A4A' }}/>
          </div>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      ) : null}
      <div className={styles.icon}>
        <Link to="/">
          <Home style={{ color: '#4A4A4A' }}/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
