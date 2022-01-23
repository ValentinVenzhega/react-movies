import React from 'react';

import { Link } from 'react-router-dom';

import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <Link to="/react-movies/" className="header__logo">
          React Movies
        </Link>
        <Link
          to="react-movies/favorites/"
          className="header__logo">
          Favorites
        </Link>
      </div>
    </div>
  );
};
