import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.css';

export const Header = () => {
  const favorite = useSelector(
    (state) => state.favorites.favorites,
  );

  return (
    <div className="header">
      <div className="header__content">
        <Link to="/react-movies" className="header__logo">
          React Movies
        </Link>
        <Link
          to="react-movies/favorites"
          className="header__logo header__favorite">
          <img src="./image/liked.svg" alt="favorite" />
          {favorite.length > 0 ? (
            <span className="header__favorite-count">
              {favorite.length}
            </span>
          ) : null}
        </Link>
      </div>
    </div>
  );
};
