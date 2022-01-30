import React from 'react';
import { useSelector } from 'react-redux';

import './Movie.css';

export const Movie = () => {
  const cart = useSelector((state) => state.cart.cart);

  const getGenres = (items) => {
    const genres = items.map((genre) => {
      return `${genre.genre}`;
    });

    return genres.join(', ');
  };

  const getCountries = (items) => {
    const countries = items.map((genre) => {
      return `${genre.country}`;
    });

    return countries.join(', ');
  };

  return (
    <div className="movie-page">
      <div className="movie-page__left">
        <div className="movie-page__title">
          {cart.nameRu}
        </div>
        <div className="movie-page__left-block">
          <div className="movie__cover-inner movie__image-left">
            <img
              src={cart.posterUrl}
              alt={cart.nameRu}
              className="movie__cover"
            />
          </div>
          <div className="movie-page__content">
            <div className="movie-page__length">
              <span className="color">Рейтинг</span>:{' '}
              <span className="color1">{cart.rating}</span>
            </div>
            <div className="movie-page__length">
              <span>Продолжительность</span>:{' '}
              <span className="color1">
                {cart.filmLength}
              </span>
            </div>
            <div className="movie-page__year">
              <span>Год</span>:{' '}
              <span className="color1">{cart.year}</span>
            </div>
            <div className="movie-page__genre">
              <span>Жанр</span>:{' '}
              <span className="color1">
                {getGenres(cart.genres)}
              </span>
            </div>
            <div className="movie-page__country">
              <span>Страна</span>:{' '}
              <span className="color1">
                {getCountries(cart.countries)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-page__right">
        <div className="movie__cover-inner">
          <img
            src={cart.posterUrl}
            alt={cart.nameRu}
            className="movie__cover"
          />
        </div>
      </div>
    </div>
  );
};
