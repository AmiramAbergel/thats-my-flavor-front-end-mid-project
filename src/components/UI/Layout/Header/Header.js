import React from 'react';
import classes from './Header.module.css';
import HeaderFavoriteBtn from './HeaderFavoriteBtn';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ICE-CREAM</h1>
                <HeaderFavoriteBtn onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img alt='A table full of delicious food!' />
            </div>
        </>
    );
};

export default Header;
