import React from 'react';
import Modal from '../../UI/Modal/Modal';
import classes from './FlavorItemCard.module.css';
const FlavorItemCard = (props) => {
    console.log(props.flavorsData);
    return (
        <Modal onClose={props.onClose}>
            <div>
                <h2>{props.flavorsData.flavorName}</h2>
                <div className={classes.summary}>
                    <div className={classes.description}>
                        <h4>Flavor Description</h4>
                        🍨 Flavor Description : {props.flavorsData.description}
                    </div>
                    <div className={classes.description}>
                        🍨 Flavor ingredients : {props.flavorsData.ingredients}
                    </div>
                    <div className={classes.description}>
                        🍨 Flavor Dietary Certifications :
                        {props.flavorsData.dietaryCertifications}
                    </div>
                    <div className={classes.description}>
                        🍨 Stores Status: {props.flavorsData.isAvailable}
                    </div>
                    <div className={classes.description}>
                        {props.flavorsData.storeNames.map((store, i) => (
                            <span key={i}>
                                Store: {store.name} | Available now ?
                                {store.available ? ` Yes!` : ' No...'}
                            </span>
                        ))}
                    </div>
                    <div className={classes.imgDiv}>
                        <img
                            sizes='(min-width: 400px) 80vw, 100vw'
                            className={classes.img}
                            src={props.flavorsData.imgUrl}
                            alt={props.flavorsData.flavorName}
                        ></img>
                    </div>

                    <div className={classes.amount}>
                        🍨Current Amount: x{props.flavorsData.amount}
                    </div>
                    <div className={classes.price}>
                        🍨Current Price: {props.flavorsData.price}
                    </div>
                </div>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onClose}
                >
                    Close
                </button>
            </div>
        </Modal>
    );
};

export default FlavorItemCard;
