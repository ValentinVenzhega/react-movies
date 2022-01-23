import React from 'react';
import { useSelector } from 'react-redux';

import { getAllMovies } from '../../redux/movies/movieSlice';

import { CartItem } from '../../components/CartItem';

import './SearchItem.css';
export const SearchItem = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const movies = useSelector(getAllMovies);

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const renderItems = () => {
    const search = movies.filter((item) =>
      item.nameRu
        .toLowerCase()
        .includes(searchValue.toLowerCase()),
    );
    return search.map((item) => (
      <CartItem item={item} key={item.filmId} />
    ));
  };

  return (
    <>
      <div className="search">
        <div className="search-title">
          {searchValue
            ? `Поиск по запросу: "${searchValue}"`
            : 'Все фильмы'}
        </div>
        <input
          className="search-block"
          onChange={onChangeSearchInput}
          value={searchValue && searchValue}
          placeholder="Введите название"
        />
      </div>
      <div className="movies">{renderItems()}</div>
    </>
  );
};
