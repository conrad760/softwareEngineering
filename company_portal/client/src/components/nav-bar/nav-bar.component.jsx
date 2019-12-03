import React from 'react';

import { NavItem } from './nav-item/nav-item.component';

import './nav-bar.style.scss';

export const NavBar = props => (
    <div className='nav_items'>
        {props.role.map(item => (
            <NavItem key={item.linkName} item={item} />
        ))}
    </div>
);
