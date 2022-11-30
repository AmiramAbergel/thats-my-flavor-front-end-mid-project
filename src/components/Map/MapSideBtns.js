import React from 'react';
import classes from './MapSideBtns.module.css';
const MapSideBtns = (props) => {
    return (
        <div className={classes.row}>
            <h2>FInd out if your flavor available!</h2>
            {props.flavorsData.map((attr, i) => {
                if (attr.category === 'Vanilla') {
                    return (
                        <button
                            key={i}
                            className={`${classes.column} ${classes.vanilla}`}
                        >
                            {attr.flavorName}
                        </button>
                    );
                } else if (attr.category === 'Nuts') {
                    return (
                        <button
                            key={i}
                            className={`${classes.column} ${classes.nuts}`}
                        >
                            {attr.flavorName}
                        </button>
                    );
                } else if (attr.category === 'Fruits') {
                    return (
                        <button
                            key={i}
                            className={`${classes.column} ${classes.fruits}`}
                        >
                            {attr.flavorName}
                        </button>
                    );
                } else if (attr.category === 'Chocolate') {
                    return (
                        <button
                            key={i}
                            className={`${classes.column} ${classes.chocolate}`}
                        >
                            {attr.flavorName}
                        </button>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default MapSideBtns;
