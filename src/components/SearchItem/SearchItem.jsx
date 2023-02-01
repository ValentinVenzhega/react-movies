import React from "react";

import { CartItem } from "../CartItem";

import styles from "./SearchItem.module.scss";

export const SearchItem = ({ films }) => {
    const [searchValue, setSearchValue] = React.useState("");

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const renderItems = () => {
        const search = films.filter((item) =>
            item.nameRu.toLowerCase().includes(searchValue.toLowerCase()),
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
            <div className={styles.search}>
                <div className={styles.title}>Все фильмы</div>
                <input
                    className={styles.input}
                    onChange={onChangeSearchInput}
                    value={searchValue}
                    placeholder="Введите название"
                    color="black"
                />
            </div>
            <div className={styles.movies}>{renderItems()}</div>
        </>
    );
};
