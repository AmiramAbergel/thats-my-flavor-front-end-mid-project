import React, { useState } from 'react';
import Map from '../components/Map/Map';
import MapSideBtns from '../components/Map/MapSideBtns';
const MapView = (props) => {
    console.log(props.flavorsData);
    return (
        <>
            <MapSideBtns flavorsData={props.flavorsData} />
            <Map flavorsData={props.flavorsData} />;
        </>
    );
};

export default MapView;
