import React from 'react';
import AvailableFlavors from '../components/Flavors/AvailableFlavors';
import FlavorsSummary from '../components/Flavors/FlavorsSummary';

const Flavors = (props) => {
    return (
        <main>
            <FlavorsSummary />
            <AvailableFlavors flavorsData={props.flavorsData} />
        </main>
    );
};

export default Flavors;
