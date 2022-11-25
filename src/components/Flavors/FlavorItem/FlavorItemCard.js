import React from 'react';
import Modal from '../../UI/Modal/Modal';
import classes from './FlavorItemCard.module.css';
const FlavorItemCard = (props) => {
    return (
        <Modal onClose={props.onClose}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <div className={classes.description}>
                        {props.description}
                    </div>
                    <image src={props.image}></image>
                    <span className={classes.amount}>x {props.amount}</span>
                    <span className={classes.price}>{props.price}</span>
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
