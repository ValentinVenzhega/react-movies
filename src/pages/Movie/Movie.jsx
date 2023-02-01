import React from "react";
import { useSelector } from "react-redux";

import styles from "./Movie.module.scss";

export const Movie = () => {
    const cart = useSelector((state) => state.cart.cart);

    const getGenres = (items) => {
        const genres = items.map((genre) => {
            return `${genre.genre}`;
        });

        return genres.join(", ");
    };

    const getCountries = (items) => {
        const countries = items.map((genre) => {
            return `${genre.country}`;
        });

        return countries.join(", ");
    };

    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.title}>{cart.nameRu}</div>
                <div className={styles.left__block}>
                    <div
                        className={`${styles.cover__inner} ${styles.image__left}`}
                    >
                        <img
                            src={cart.posterUrl}
                            alt={cart.nameRu}
                            className={styles.cover}
                        />
                    </div>
                    <div className={styles.content}>
                        <div className={styles.length}>
                            <span className={styles.color}>Рейтинг</span>:{" "}
                            <span className={styles.color__text}>
                                {cart.rating}
                            </span>
                        </div>
                        <div className={styles.length}>
                            <span>Продолжительность</span>:{" "}
                            <span className={styles.color__text}>
                                {cart.filmLength}
                            </span>
                        </div>
                        <div className={styles.year}>
                            <span>Год</span>:{" "}
                            <span className={styles.color__text}>
                                {cart.year}
                            </span>
                        </div>
                        <div className={styles.genre}>
                            <span>Жанр</span>:{" "}
                            <span className={styles.color__text}>
                                {getGenres(cart.genres)}
                            </span>
                        </div>
                        <div className={styles.country}>
                            <span>Страна</span>:{" "}
                            <span className={styles.color__text}>
                                {getCountries(cart.countries)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.cover__inner}>
                    <img
                        src={cart.posterUrl}
                        alt={cart.nameRu}
                        className={styles.cover}
                    />
                </div>
            </div>
        </div>
    );
};
