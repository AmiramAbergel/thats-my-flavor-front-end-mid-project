import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';

// define constants
const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ flavorsData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = flavorsData.map((attr) => {
        return attr.storeAddress.map(({ name, lat, lng }, i) => {
            return (
                <LocationMarker
                    key={i}
                    name={name}
                    lat={lat}
                    lng={lng}
                    onClick={() => setLocationInfo({ id: i, title: name })}
                />
            );
        });
    });

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
                }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    );
};

Map.defaultProps = {
    center: {
        lat: 43.666114869279646,
        lng: -79.38808756819225,
    },
    zoom: 10,
};

export default Map;
