import React, { useState } from 'react';
import Favorites from '../../Favorites/Favorites';
import Header from './Header/Header';
import classes from './Layout.module.css';
import MainNavigation from './NavBar/MainNavigation';

const Layout = (props) => {
    const [favoritesIsShown, setFavoritesIsShown] = useState(false);
    const showFavoritesHandler = () => {
        setFavoritesIsShown(true);
    };

    const hideFavoritesHandler = () => {
        setFavoritesIsShown(false);
    };

    return (
        <>
            <MainNavigation />
            {favoritesIsShown && (
                <Favorites
                    favorites={props.favorites}
                    onClose={hideFavoritesHandler}
                    onRemoveFav={props.onRemoveFav}
                />
            )}
            <Header onShowFavorites={showFavoritesHandler} />
            <main className={classes.main}>{props.children}</main>
        </>
    );
};

export default Layout;
