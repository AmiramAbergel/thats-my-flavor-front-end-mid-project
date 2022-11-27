import React, { useState } from 'react';
import FavoriteIcon from '../../../../assets/FavoriteIcon';
import classes from './HeaderFavoriteBtn.module.css';
const HeaderFavoriteBtn = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ''
    }`;
    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <FavoriteIcon />
            </span>
            <span>Your Favorites</span>
            <span className={classes.badge}>{}</span>
        </button>
    );
};

export default HeaderFavoriteBtn;
