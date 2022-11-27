import React from 'react';
import AvailableFlavors from '../components/Flavors/AvailableFlavors';
import FlavorsSummary from '../components/Flavors/FlavorsSummary';
import { useState, useEffect } from 'react';

const Flavors = (props) => {
    return (
        <main>
            <FlavorsSummary />
            <AvailableFlavors flavorsData={props.flavorsData} />
        </main>
    );
};

export default Flavors;
