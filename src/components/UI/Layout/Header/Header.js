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
            <div className={classes['main-image']}>
                <img
                    src='https://image.shutterstock.com/image-photo/healthy-low-calorie-summer-dessert-260nw-1121363915.jpg'
                    alt='A table full of delicious food!'
                />
            </div>
        </>
    );
};

export default Header;
