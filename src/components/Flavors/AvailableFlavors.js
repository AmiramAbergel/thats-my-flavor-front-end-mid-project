import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import FlavorItem from './FlavorItem/FlavorItem';
import classes from './AvailableFlavors.module.css';
import FlavorItemCard from './FlavorItem/FlavorItemCard';
import { useAuth } from '../../firebase/auth';
import { addFavorite } from '../../firebase/DatabaseService';

const AvailableFlavors = (props) => {
    const [flavItemIsShown, setFlavItemIsShown] = useState(false);
    const { authUser } = useAuth();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const showFlavItemHandler = () => {
        setFlavItemIsShown(true);
    };

    const hideFlavItemHandler = () => {
        setFlavItemIsShown(false);
    };

    const addToFavHandler = async (event) => {
        const isTastedBefore = false;
        const selectedToFavorite = props.flavorsData.find(
            (flavor) => flavor.id === event.target.id
        );

        setIsSubmitting(true);
        console.log(selectedToFavorite);
        try {
            // Adding to favorite
            // Store data into Firestore
            await addFavorite(
                authUser.uid,
                selectedToFavorite.allergyInfo,
                selectedToFavorite.amount,
                selectedToFavorite.category,
                selectedToFavorite.description,
                selectedToFavorite.dietaryCertifications,
                selectedToFavorite.flavorName,
                selectedToFavorite.imgUrl,
                selectedToFavorite.ingredients,
                selectedToFavorite.isAvailable,
                selectedToFavorite.price,
                selectedToFavorite.storeAddress,
                selectedToFavorite.storeName,
                isTastedBefore
            );
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const flavorsList = props.flavorsData.map((flavor) => (
        <div key={flavor.id}>
            <FlavorItem
                id={flavor.id}
                name={flavor.flavorName}
                description={flavor.description}
                price={flavor.price}
                onShowFlavItem={showFlavItemHandler}
                onClose={hideFlavItemHandler}
            />
            <button id={flavor.id} onClick={addToFavHandler}>
                Add to favorites
            </button>
        </div>
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
