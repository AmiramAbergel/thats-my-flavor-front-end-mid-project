import React from 'react';
import classes from './FlavorItem.module.css';
const FlavorItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <li className={classes.flavor}>
            <button onClick={props.onShowFlavItem}>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </button>
        </li>
    );
};

export default FlavorItem;
