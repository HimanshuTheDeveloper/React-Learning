import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo'; 
import NavigationItems from '../Navigationitems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav className={classes.nav}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;