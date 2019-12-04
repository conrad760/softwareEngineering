import React from 'react';

export const NavItem = props => (
        <li>
            <a href={props.link}>
                <i className={props.icon}></i>
                <span className='nav-text'>{props.linkName}</span>
            </a>
        </li>
);

export default NavItem;
