import React from 'react';
import Map from '../components/Map/Map';
import MapSideBtns from '../components/Map/MapSideBtns';
const MapView = (props) => {
    return (
        <>
            <MapSideBtns />
            <Map />;
        </>
    );
};

export default MapView;
