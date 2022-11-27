import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import FlavorItem from './FlavorItem/FlavorItem';
import classes from './AvailableFlavors.module.css';
import FlavorItemCard from './FlavorItem/FlavorItemCard';

const AvailableFlavors = (props) => {
    const [flavItemIsShown, setFlavItemIsShown] = useState(false);

    const showFlavItemHandler = () => {
        setFlavItemIsShown(true);
    };

    const hideFlavItemHandler = () => {
        setFlavItemIsShown(false);
    };
    console.log(props.flavorsData);

    const flavorsList = props.flavorsData.map((flavor) => (
        <FlavorItem
            key={flavor.id}
            id={flavor.id}
            name={flavor.flavorName}
            description={flavor.description}
            price={flavor.price}
            onShowFlavItem={showFlavItemHandler}
            onClose={hideFlavItemHandler}
        />
    ));

    return (
        <section className={classes.flavors}>
            {flavItemIsShown && (
                <FlavorItemCard onClose={hideFlavItemHandler} />
            )}
            <Card>
                <ul>{flavorsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableFlavors;
