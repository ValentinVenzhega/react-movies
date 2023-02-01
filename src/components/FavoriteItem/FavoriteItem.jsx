import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    addFavorite,
    deleteFavorite,
} from "../../redux/favorites/favoriteSlice";

import styles from "./FavoriteItem.module.scss";

import { liked, unliked } from "../../assets/image/index.js";

export const FavoriteItem = ({ item }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.favorites.favorites);

    const isItemsInFavorite = items.some(
        (favorite) => favorite.filmId === item.filmId,
    );

    const onClickFavorite = (e) => {
        if (isItemsInFavorite) {
            dispatch(deleteFavorite(item.filmId));
        } else {
            dispatch(addFavorite(item));
        }
    };

    return (
        <img
            onClick={onClickFavorite}
            src={isItemsInFavorite ? liked : unliked}
            alt="liked"
        />
    );
};
