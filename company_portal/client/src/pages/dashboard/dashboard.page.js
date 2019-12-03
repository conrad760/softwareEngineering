import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './dashboard.style.scss';
import NavItem from '../../components/nav-bar/nav-item/nav-item.component';
import {
    get_GLOBAL_ADMIN,
    get_FINANCE_ADMIN,
    get_SALES_ADMIN,
    get_HR_ADMIN,
    get_ENGG_ADMIN
} from '../../redux/actions/index';

const Dashboard = () => {
    const dispatch = useDispatch();
    const data = dispatch(get_GLOBAL_ADMIN());
    // console.log(data);
    const roles = useSelector(state => state.roles);
    console.log(roles);

    return (
        <>
            <div className='area'></div>
            <nav className='main-menu'>
                <ul>
                    {roles.map(role => 
                    <NavItem
                    link = {role.link} 
                    linkName = {role.linkName} 
                    icon = {role.icon} 
                    />
                        )}
                        
                    
                </ul>

                <ul className='logout'>
                    <li>
                        <a href='www.google.com'>
                            <i className='fa fa-power-off fa-2x'></i>
                            <span className='nav-text'>Logout</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Dashboard;
