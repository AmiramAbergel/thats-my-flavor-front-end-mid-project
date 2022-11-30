import React from 'react';
import classes from './FavoriteItem.module.css';
const FavoriteItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    console.log(props);
    return (
        <li className={classes['cart-item']}>
            <div>
                <h3>{props.flavorName}</h3>
                <div className={classes.description}>{props.description}</div>

                <div className={classes.summary}>
                    <span className={classes.toFix}>
                        <span className={classes.amount}>
                            <h2> Tasted Before:</h2>
                            {props.isTastedBefore ? '👎👎👎' : '👍👍👍'}
                        </span>
                    </span>
                    <span className={classes.price}>price:{price}</span>
                </div>
                <div className={classes.imgDiv}>
                    {/* <img
                        sizes='(min-width: 400px) 80vw, 100vw'
                        className={classes.img}
                        src={props.flavorsData.imgUrl}
                        alt={props.flavorsData.flavorName}
                    ></img> */}
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
