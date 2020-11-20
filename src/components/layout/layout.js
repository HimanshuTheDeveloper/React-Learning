import React from 'react';
import classes from './layout.css';
const layout = (props) =>(
    <React.Fragment>
        <div>Toolbar , Sidebar and Backdrop</div>
        <main className = {classes.Content}>
                {props.children}
        </main>
    </React.Fragment>
);

export default layout;