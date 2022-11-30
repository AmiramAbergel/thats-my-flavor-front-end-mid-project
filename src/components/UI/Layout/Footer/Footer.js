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
                <button>About</button>
                <button>Locate</button>
                <button>Why</button>
                <button>Terms</button>
            </div>
        </div>
    );
};

export default Footer;
