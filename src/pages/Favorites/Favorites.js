import React from 'react';
import { useSelector } from 'react-redux';

import { CartItem } from '../../components/CartItem';

import './Favorites.css';

export const Favorites = () => {
  const favorite = useSelector(
    (state) => state.favorites.favorites,
  );

  if (favorite.length < 1) {
    return (
      <div className="favorites">
        <h1 className="favorites__title">
          Добавьте фильм!
        </h1>
      </div>
    );
  }

  return (
    <div className="favorites">
      {favorite.map((item, index) => (
        <CartItem item={item} key={item.filmId} />
      ))}
    </div>
  );
};
