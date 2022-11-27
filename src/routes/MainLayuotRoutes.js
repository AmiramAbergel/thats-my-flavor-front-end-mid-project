import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/UI/Layout/Layout';
import Flavors from '../pages/Flavors';
import Home from '../pages/Home';
import MapView from '../pages/MapView';
import RandFlavor from '../pages/RandFlavor';

function MainLayoutRoutes() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path='/flavors' element={<Flavors />} />
                    <Route path='/rand-flavor' element={<RandFlavor />} />
                    <Route path='/map' element={<MapView />} />
                </Routes>
            </Layout>
        </>
    );
}

export default MainLayoutRoutes;
