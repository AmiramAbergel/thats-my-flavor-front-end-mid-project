const LocationInfoBox = ({ info }) => {
    return (
        <div className='location-info'>
            <h2>Ice-Cream Store Detail: </h2>
            <ul>
                <li>
                    ID: <strong>{info.id}</strong>
                </li>
                <li>
                    Store Name: <strong>{info.title}</strong>
                </li>
                <li>Available ? {info.id > 1 ? 'Yes!' : 'No...'}</li>
            </ul>
        </div>
    );
};

export default LocationInfoBox;
