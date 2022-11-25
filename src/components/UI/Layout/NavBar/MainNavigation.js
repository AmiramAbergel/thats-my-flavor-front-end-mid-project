import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
/*
 * General footer component.
 */
const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink
                            to='/'
                            className={(navData) =>
                                navData.isActive ? 'active' : ''
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/flavors'
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Flavor Finder
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/rand-flavor'
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Random Flavor
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/map'
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Locate Flavor
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
