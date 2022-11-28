import React from 'react';
import classes from './FavoriteItem.module.css';
const FavoriteItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>

                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span>
                        <h5>Tasted Before:</h5>
                    </span>

                    <span className={classes.amount}>
                        {props.isTastedBefore ? 'x' : 'v'}
                    </span>
                </div>
            </div>
            <button onClick={props.onUpdateFav}>
                {props.isTastedBefore ? 'Mark as tasted' : 'UnMark as tasted'}
            </button>
            <div className={classes.actions}>
                <button onClick={props.onRemoveFav}>Delete favorite</button>
            </div>
        </li>
    );
};

export default FavoriteItem;
