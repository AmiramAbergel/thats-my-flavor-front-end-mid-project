import React, { useState } from 'react';
import Favorites from '../../Favorites/Favorites';
import Footer from './Footer/Footer';
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
                    onUpdateFav={props.onUpdateFav}
                />
            )}
            <Header onShowFavorites={showFavoritesHandler} />
            <main className={classes.main}>{props.children}</main>
            <Footer />
        </>
    );
};

export default Layout;
