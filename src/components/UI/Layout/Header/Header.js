import React, { useState } from 'react';
import classes from './Header.module.css';
import HeaderFavoriteBtn from './HeaderFavoriteBtn';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1 className={classes.nyh1}>ICE-CREAM</h1>
                <HeaderFavoriteBtn onClick={props.onShowFavorites} />
            </header>
            <div className={classes['main-image']}></div>
        </>
    );
};

export default Header;
