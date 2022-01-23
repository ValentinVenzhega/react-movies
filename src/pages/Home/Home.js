import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { addMovies } from '../../redux/movies/movieSlice';
import { SearchItem } from '../../components/SearchItem';

import './Home.css';

export const Home = () => {
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(1);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLeft = (e) => {
    if (count <= 1) {
      return count;
    } else {
      setCount(count - 1);
      handleScroll();
    }
  };

  const handleRight = () => {
    setCount(count + 1);
    handleScroll();
  };

  React.useEffect(() => {
    const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${count}`;
    const API_KEY = 'd3cb007e-679f-472d-824f-7e853bc3ae98';

    async function fetchData() {
      try {
        const itemsResponse = await axios({
          method: 'get',
          url: API_URL,
          headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json',
          },
        });
        dispatch(addMovies(itemsResponse.data.films));
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [count]);

  return (
    <div className="home-page">
      <SearchItem />
      <div className="pagination-block">
        <button
          className="pagination-block__button"
          onClick={handleLeft}>
          Предыдущая страница
        </button>
        <span className="pagination-block__count">
          {count}
        </span>
        <button
          className="pagination-block__button"
          onClick={handleRight}>
          Следующая страница
        </button>
      </div>
    </div>
  );
};
