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
        imgUrl: 'https://image.influenster.com/eyJidWNrZXQiOiAiaW5mbHVlbnN0ZXJfcHJvZHVjdGlvbiIsICJrZXkiOiAibWVkaWEvcHJvZHVjdC9pbWFnZS9wcm9kdWN0L2ltYWdlL2Jvb20tY2hvY29sYXR0YS1jb3JlLWRldGFpbC0yMDE5LnBuZyIsICJlZGl0cyI6IHsicm90YXRlIjogbnVsbCwgInJlc2l6ZSI6IHsid2lkdGgiOiA3NTAsICJoZWlnaHQiOiA3NTAsICJmaXQiOiAiaW5zaWRlIiwgImJhY2tncm91bmQiOiB7InIiOiAxLCAiZyI6IDEsICJiIjogMSwgImFscGhhIjogMH0sICJ3aXRob3V0RW5sYXJnZW1lbnQiOiB0cnVlfX0sICJleHRlbmQiOiB7fX0=',
        ingredients: ['cream', 'skim milk'],
        allergyInfo: 'may contain other tree nuts',
        dietaryCertifications: 'Kosher',
        description: 'Cheesecake Ice Cream with Cheesecake Brownie Chunks',
        storeName: 'MC',
        storeAddress: 'Nicollet Mall between 7th and 8th Street',
        isAvailable: true,
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
