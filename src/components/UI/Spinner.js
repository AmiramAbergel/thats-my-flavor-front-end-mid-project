import React from 'react';

import classes from './Spinner.module.css';

/*
 * General Spinner component.
 */
const Spinner = () => {
    return (
        <div className='classes.lds-ring'>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default Spinner;
