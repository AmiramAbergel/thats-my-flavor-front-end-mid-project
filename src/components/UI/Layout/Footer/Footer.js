import React from 'react';

import styles from './Footer.module.css';
/*
 * General footer component.
 */
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <button>Contact</button>
            </div>
        </div>
    );
};

export default Footer;
