import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addMovies } from "../../redux/movies/movieSlice";

import { SearchItem } from "../../components/SearchItem";

import styles from "./Home.module.scss";
import { Loader } from "../../components/Loader";

export const Home = () => {
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(1);
    const [films, setFilms] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const scrollToEnd = () => {
        setPage(page + 1);
    };

    window.onscroll = function () {
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight
        ) {
            scrollToEnd();
        }
    };

    React.useEffect(() => {
        const API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${page}`;
        const API_KEY = "d3cb007e-679f-472d-824f-7e853bc3ae98";

        async function fetchData() {
            try {
                const itemsResponse = await axios({
                    method: "get",
                    url: API_URL,
                    headers: {
                        "X-API-KEY": API_KEY,
                        "Content-Type": "application/json",
                    },
                });
                setFilms([...films, ...itemsResponse.data.films]);
                dispatch(addMovies(itemsResponse.data.films));
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [page]);

    return (
        <div className={styles.page}>
            {isLoading ? <Loader /> : <SearchItem films={films} />}
        </div>
    );
};
