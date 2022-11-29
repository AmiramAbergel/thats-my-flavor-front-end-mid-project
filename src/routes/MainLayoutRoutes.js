import React, { useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/UI/Layout/Layout';
import Flavors from '../pages/Flavors';
import MapView from '../pages/MapView';
import RandFlavor from '../pages/RandFlavor';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../firebase/auth';
import {
    getFlavors,
    getFavorites,
    deleteFavorite,
    updateFavorite,
} from '../firebase/DatabaseService';
const REDIRECT_PAGE = '/home';
function MainLayoutRoutes() {
    const { authUser, isLoading } = useAuth();
    const [isLoadingF, setIsLoadingF] = useState(true);
    const [flavors, setFlavors] = useState({});
    const [favorites, setFavorites] = useState({});
    const [isTastedBefore, setIsTastedBefore] = useState(false);
    const navigate = useNavigate();
    // Listen for changes to loading and authUser, redirect if needed
    useEffect(() => {
        if (!isLoading && !authUser) {
            navigate(REDIRECT_PAGE);
        }
    }, [authUser, isLoading, navigate]);

    const getAllFlavors = useCallback(async () => {
        if (authUser) {
            const unsubscribe = await getFlavors(setFlavors, setIsLoadingF);
            return () => unsubscribe();
        }
    }, [authUser]);

    const getAllFavorites = useCallback(async () => {
        if (authUser) {
            const unsubscribe = await getFavorites(
                authUser.uid,
                setFavorites,
                setIsLoadingF
            );
            return () => unsubscribe();
        }
    }, [authUser]);

    // Get flavors and favorites once user is logged in
    useEffect(() => {
        getAllFlavors();
        getAllFavorites();
    }, [getAllFlavors, getAllFavorites, authUser]);

    // Delete favorite from Storage
    const onDeleteFav = async (id) => {
        let isSucceed = true;
        try {
            await deleteFavorite(id);
        } catch (error) {
            console.log(error);
            isSucceed = false;
        }
    };
    // Update favorite from Storage
    const onUpdateFav = async (favorite) => {
        try {
            await updateFavorite(
                favorite.id,
                authUser.uid,
                favorite.allergyInfo,
                favorite.amount,
                favorite.category,
                favorite.description,
                favorite.dietaryCertifications,
                favorite.flavorName,
                favorite.imgUrl,
                favorite.ingredients,
                favorite.isAvailable,
                favorite.price,
                !favorite.isTastedBefore
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Layout
                onRemoveFav={onDeleteFav}
                onUpdateFav={onUpdateFav}
                favorites={favorites}
            >
                <Routes>
                    <Route
                        path='/flavors'
                        element={
                            !authUser || isLoadingF ? (
                                'Loading...'
                            ) : (
                                <Flavors flavorsData={flavors} />
                            )
                        }
                    />
                    <Route path='/rand-flavor' element={<RandFlavor />} />
                    <Route path='/map' element={<MapView />} />
                </Routes>
            </Layout>
        </>
    );
}

export default MainLayoutRoutes;
