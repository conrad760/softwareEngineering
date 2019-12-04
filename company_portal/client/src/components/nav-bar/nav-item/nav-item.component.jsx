import React from 'react';
import { Link } from 'react-router-dom';

export const NavItem = props => (
    <li>
        <Link to={props.link}>
            <i className={props.icon}></i>
            <span className='nav-text'>{props.linkName}</span>
        </Link>
    </li>
);

export default NavItem;
