import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setItemCart } from '../../redux/cart/cartSlice';

import { FavoriteItem } from '../FavoriteItem';

import './CartItem.css';

export const CartItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const rating =
    item.rating === null
      ? item.ratig
      : parseFloat(item.rating);

  const handleClick = () => {
    navigate(`/react-movies/${item.nameRu}`);
    dispatch(setItemCart(item));
  };

  const getClassByRate = (vote) => {
    if (vote >= 7) {
      return 'green';
    } else if (vote > 5) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  const getRating = (item) => {
    if (item > 10) {
      return (item / 10).toFixed(1);
    } else if (item == null) {
      // почему не работает при null === null
      return 0;
    } else {
      return item;
    }
  };

  return (
    <div className="movie">
      <div className="movie__cover-inner">
        <div className="movie__favorite">
          <FavoriteItem item={item} />
        </div>
        <img
          src={item.posterUrl}
          alt={item.nameRu}
          className="movie__cover"
        />
        <div
          className="movie__cover--darkened"
          onClick={handleClick}></div>
      </div>
      <div className="movie__info">
        <div className="movie__title">{item.nameRu}</div>
        <div className="movie__category">{item.year}</div>
        <div
          className={`movie__average movie__average--${getClassByRate(
            rating,
          )}`}>
          {getRating(rating)}
        </div>
      </div>
    </div>
  );
};
