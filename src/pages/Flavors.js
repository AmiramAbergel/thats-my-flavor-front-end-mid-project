import React from 'react';
import AvailableFlavors from '../components/Flavors/AvailableFlavors';
import FlavorsSummary from '../components/Flavors/FlavorsSummary';

const Flavors = () => {
    return (
        <main>
            <FlavorsSummary />
            <AvailableFlavors />
        </main>
    );
};

export default Flavors;
