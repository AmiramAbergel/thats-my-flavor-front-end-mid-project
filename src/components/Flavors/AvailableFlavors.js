import React from 'react';
import Card from '../UI/Card/Card';
import FlavorItem from './FlavorItem/FlavorItem';
import classes from './AvailableFlavors.module.css';
const DUMMY_FLAVS = [
    {
        id: 'm1',
        name: 'Blondie Ambition',
        description: 'Cheesecake Ice Cream with Cheesecake Brownie Chunks',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Boom Chocolatta™ Cookie Core',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Bourbon Pecan Pie',
        description: 'American',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Cheesecake Brownie',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableFlavors = () => {
    const flavorsList = DUMMY_FLAVS.map((flavor) => (
        <FlavorItem
            key={flavor.id}
            id={flavor.id}
            name={flavor.name}
            description={flavor.description}
            price={flavor.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{flavorsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableFlavors;
