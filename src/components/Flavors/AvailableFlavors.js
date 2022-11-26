import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import FlavorItem from './FlavorItem/FlavorItem';
import classes from './AvailableFlavors.module.css';
import FlavorItemCard from './FlavorItem/FlavorItemCard';
const DUMMY_FLAVS = [
    {
        id: 'm1',
        flavorName: 'Blondie Ambition',
        category: 'Chocolate',
        imgUrl: 'https://world.openfoodfacts.org/images/products/003/663/108/5154/front_en.3.full.jpg',
        ingredients: ['cream', 'skim milk'],
        allergyInfo: 'may contain other tree nuts',
        dietaryCertifications: 'Kosher',
        description: 'Cheesecake Ice Cream with Cheesecake Brownie Chunks',
        storeName: 'MC',
        storeAddress: 'Nicollet Mall between 7th and 8th Street',
        amount: 1,
        price: 22.99,
    },
    {
        id: 'm2',
        flavorName: 'Boom Chocolatta™ Cookie Core',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        flavorName: 'Bourbon Pecan Pie',
        description: 'American',
        price: 12.99,
    },
    {
        id: 'm4',
        flavorName: 'Cheesecake Brownie',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableFlavors = () => {
    const [flavItemIsShown, setFlavItemIsShown] = useState(false);

    const showFlavItemHandler = () => {
        setFlavItemIsShown(true);
    };

    const hideFlavItemHandler = () => {
        setFlavItemIsShown(false);
    };
    const flavorsList = DUMMY_FLAVS.map((flavor) => (
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
