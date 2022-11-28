import React, { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import FavoriteItem from './FavoriteItem';
import classes from './Favorites.module.css';

const Favorites = (props) => {
    const hasItems = props.favorites.length > 0;

    const favoriteItemRemoveHandler = (id) => {};

    const favoriteItemUpdateHandler = (item) => {};

    const favoritesList = (
        <ul className={classes['cart-items']}>
            {props.favorites.map((favorite) => (
                <FavoriteItem
                    key={favorite.id}
                    name={favorite.name}
                    amount={favorite.amount}
                    price={favorite.price}
                    onRemove={favoriteItemRemoveHandler.bind(null, favorite.id)}
                    onUpdate={favoriteItemUpdateHandler.bind(null, favorite)}
                />
            ))}
        </ul>
    );

    return (
        <Modal>
            {favoritesList}
            <div className={classes.total}>
                <span>YouFav</span>
                <span>{}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onClose}
                >
                    Close
                </button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Favorites;
