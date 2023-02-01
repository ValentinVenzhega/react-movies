import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setItemCart } from "../../redux/cart/cartSlice";

import { FavoriteItem } from "../FavoriteItem";

import styles from "./CartItem.module.scss";

export const CartItem = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const rating = item.rating === null ? item.ratig : parseFloat(item.rating);

    const handleClick = () => {
        navigate(`/react-movies/${item.nameRu}`);
        dispatch(setItemCart(item));
    };

    const getClassByRate = (vote) => {
        if (vote >= 7) {
            return styles.green;
        } else if (vote > 5) {
            return styles.orange;
        } else {
            return styles.red;
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
        <div className={styles.movie}>
            <div className={styles.inner}>
                <div className={styles.favorite}>
                    <FavoriteItem item={item} />
                </div>
                <img
                    src={item.posterUrl}
                    alt={item.nameRu}
                    className={styles.cover}
                />
                <div className={styles.darkened} onClick={handleClick}></div>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>{item.nameRu}</div>
                <div className={styles.category}>{item.year}</div>
                <div className={`${styles.average} ${getClassByRate(rating)}`}>
                    {getRating(rating)}
                </div>
            </div>
        </div>
    );
};
