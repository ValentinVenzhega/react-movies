import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

import { liked } from "../../assets/image/index.js";

export const Header = () => {
    const favorite = useSelector((state) => state.favorites.favorites);

    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <Link to="/react-movies" className={styles.logo}>
                    React Movies
                </Link>
                <Link
                    to="react-movies/favorites"
                    className={`${styles.logo} ${styles.favorite}`}
                >
                    <img src={liked} alt="favorite" />
                    {favorite.length > 0 ? (
                        <span className={styles.count}>{favorite.length}</span>
                    ) : null}
                </Link>
            </div>
        </div>
    );
};
