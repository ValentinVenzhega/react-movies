import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addFavorite,
  deleteFavorite,
} from '../../redux/favorites/favoriteSlice';

import './FavoriteItem.css';

export const FavoriteItem = ({ item }) => {
  const dispatch = useDispatch();
  const items = useSelector(
    (state) => state.favorites.favorites,
  );

  const isItemsInFavorite = items.some(
    (favorite) => favorite.filmId === item.filmId,
  );

  const onClickFavorite = (e) => {
    if (isItemsInFavorite) {
      dispatch(deleteFavorite(item.filmId));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <img
      onClick={onClickFavorite}
      src={
        isItemsInFavorite
          ? '/image/liked1.svg'
          : '/image/unliked1.svg'
      }
      alt="Unliked"
    />
  );
};
