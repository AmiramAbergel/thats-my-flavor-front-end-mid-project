import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../firebase/auth';
import classes from './MainNavigation.module.css';
/*
 * General footer component.
 */
const MainNavigation = () => {
    const { authUser, signOut } = useAuth();
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul>
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
                    <li>
                        <div> {authUser?.email}</div>
                        <button onClick={signOut}>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
