import React from 'react';
import AvailableFlavors from '../components/Flavors/AvailableFlavors';
import FlavorsSummary from '../components/Flavors/FlavorsSummary';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/auth';
const REDIRECT_PAGE = '/home';
const Flavors = () => {
    const { authUser, isLoading } = useAuth();
    const navigate = useNavigate();
    // State involved in loading, setting, deleting, and updating flavors
    //const [flavors, setFlavors] = useState([]);

    // Listen for changes to loading and authUser, redirect if needed
    useEffect(() => {
        if (!isLoading && !authUser) {
            navigate(REDIRECT_PAGE);
        }
    }, [authUser, isLoading]);
    return (
        <main>
            <FlavorsSummary />
            <AvailableFlavors />
        </main>
    );
};

export default Flavors;
