import React from "react";
import { useSelector } from "react-redux";

import { CartItem } from "../../components/CartItem";

import styles from "./Favorites.module.scss";

export const Favorites = () => {
    const favorite = useSelector((state) => state.favorites.favorites);

    if (favorite.length < 1) {
        return (
            <div className={styles.favorites}>
                <h1 className={styles.title}>Добавьте фильм!</h1>
            </div>
        );
    }

    return (
        <div className={styles.favorites}>
            <h1 className={styles.title}>Избранные фильмы!</h1>
            <div className={styles.block}>
                {favorite.map((item, index) => (
                    <CartItem item={item} key={item.filmId} />
                ))}
            </div>
        </div>
    );
};
