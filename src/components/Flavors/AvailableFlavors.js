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
    const [specificFlavor, setSpecificFlavor] = useState(null);

    const showFlavItemHandler = (e) => {
        setSpecificFlavor(e);
        setFlavItemIsShown(true);
    };

    const hideFlavItemHandler = () => {
        setFlavItemIsShown(false);
    };
    console.log(isSubmitting);
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
                onShowFlavItem={() => showFlavItemHandler(flavor)}
                onClose={hideFlavItemHandler}
            />
            <button
                className={`${classes.btn} ${classes.iconSend}`}
                id={flavor.id}
                onClick={addToFavHandler}
            >
                Add to favorites
            </button>
        </div>
    ));

    return (
        <div className={classes.flex}>
            <section className={classes.flavors}>
                {flavItemIsShown && (
                    <FlavorItemCard
                        flavorsData={specificFlavor}
                        onClose={hideFlavItemHandler}
                    />
                )}

                <Card>
                    <ul>{flavorsList}</ul>
                </Card>
            </section>
            <section className={classes.side}>
                <img
                    src='https://media.istockphoto.com/id/687685938/photo/woman-hand-holding-an-ice-cream-cone-on-a-pink-background.jpg?b=1&s=170667a&w=0&k=20&c=Nb0unkfk-iGTVSTtMH56gNL5zAKFKvR9OVVcovnT70Y='
                    alt='ice'
                ></img>
            </section>
        </div>
    );
};

export default AvailableFlavors;
