import React from 'react';

import { CartItem } from '../CartItem';

import './SearchItem.css';

export const SearchItem = ({ films }) => {
  const [searchValue, setSearchValue] = React.useState('');

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const renderItems = () => {
    const search = films.filter((item) =>
      item.nameRu
        .toLowerCase()
        .includes(searchValue.toLowerCase()),
    );
    return (
      <>
        {search.map((item) => (
          <CartItem item={item} key={item.filmId} />
        ))}
      </>
    );
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
