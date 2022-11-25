import React from 'react';
import classes from './FlavorsSummary.module.css';

const FlavorsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Ice-Cream flavors just for you</h2>
            <p>
                Choose your favorite flavor from our broad selection of
                available ice-cream flavors and enjoy a delicious ice-cream .
            </p>
        </section>
    );
};

export default FlavorsSummary;
