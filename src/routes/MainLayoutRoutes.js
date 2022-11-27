import React, { useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/UI/Layout/Layout';
import Flavors from '../pages/Flavors';
import MapView from '../pages/MapView';
import RandFlavor from '../pages/RandFlavor';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../firebase/auth';
import { getFlavors } from '../firebase/DatabaseService';
const REDIRECT_PAGE = '/home';
function MainLayoutRoutes() {
    const { authUser, isLoading } = useAuth();
    const [isLoadingFlavors, setIsLoadingFlavors] = useState(true);
    const [flavors, setFlavors] = useState({});
    const navigate = useNavigate();
    // Listen for changes to loading and authUser, redirect if needed
    useEffect(() => {
        if (!isLoading && !authUser) {
            navigate(REDIRECT_PAGE);
        }
    }, [authUser, isLoading, navigate]);

    const getAllFlavors = useCallback(async () => {
        if (authUser) {
            const unsubscribe = await getFlavors(
                setFlavors,
                setIsLoadingFlavors
            );
            return () => unsubscribe();
        }
    }, [authUser]);

    // Get flavors once user is logged in
    useEffect(() => {
        getAllFlavors();
    }, [getAllFlavors, authUser]);

    return (
        <>
            <Layout>
                <Routes>
                    <Route
                        path='/flavors'
                        element={
                            !authUser || isLoadingFlavors ? (
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
