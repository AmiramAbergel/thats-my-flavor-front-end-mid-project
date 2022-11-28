import React, { useState } from 'react';
import Modal from '../UI/Modal/Modal';
import FavoriteItem from './FavoriteItem';
import classes from './Favorites.module.css';

const Favorites = (props) => {
    const hasItems = props.favorites.length > 0;

    const favoritesList = (
        <ul className={classes['cart-items']}>
            {props.favorites.map((favorite) => (
                <FavoriteItem
                    key={favorite.id}
                    category={favorite.category}
                    description={favorite.description}
                    flavorName={favorite.flavorName}
                    imgUrl={favorite.imgUrl}
                    isAvailable={favorite.isAvailable}
                    isTastedBefore={favorite.isTastedBefore}
                    amount={favorite.amount}
                    price={favorite.price}
                    onRemoveFav={() => props.onRemoveFav?.(favorite.id)}
                    // onUpdateFav={() => props.onUpdateFav.bind(null, favorite)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onClose={props.onClose}>
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
                {hasItems && <button className={classes.button}>Test</button>}
            </div>
        </Modal>
    );
};

export default Favorites;
