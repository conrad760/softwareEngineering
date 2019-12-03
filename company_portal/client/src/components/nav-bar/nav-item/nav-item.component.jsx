import { React } from 'react';

export const NavItem = props => (
    <>
        <li>
            <a href={props.link.link}>
                <i className={props.link.icon}></i>
                <span className='nav-text'>props.link.linkName</span>
            </a>
        </li>
    </>
);

