import React from 'react';
//import NavItem from '../../components/nav-bar/nav-item/nav-item.component'
//import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';

import './dashboard.style.scss';
import NavItem from '../../components/nav-bar/nav-item/nav-item.component';

const Dashboard = ({
    auth: { 
        user
    },
    logout
}) => {
    console.log(user);
    
    return (
    <>
        <div className='area'>
            <p>***********************Welcome {user && user.name} ,and thank you for being here. Your role is {user && user.role}</p>
        </div>
        <nav className='main-menu'>
        
            <ul>
                <NavItem link='https://www.google.com' icon='fa fa-rocket fa-2x' linkName='Google'/>
                <li>
                    <a href='www.google.com'>
                        <i className='fa fa-home fa-2x'></i>
                        <span className='nav-text'>Dashboard</span>
                    </a>
                </li>
                <li className='has-subnav'>
                    <a href='www.google.com'>
                        <i className='fa fa-laptop fa-2x'></i>
                        <span className='nav-text'>Stars Components</span>
                    </a>
                </li>
                <li className='has-subnav'>
                    <a href='www.google.com'>
                        <i className='fa fa-list fa-2x'></i>
                        <span className='nav-text'>Forms</span>
                    </a>
                </li>
                <li className='has-subnav'>
                    <a href='www.google.com'>
                        <i className='fa fa-folder-open fa-2x'></i>
                        <span className='nav-text'>Pages</span>
                    </a>
                </li>
                <li>
                    <a href='www.google.com'>
                        <i className='fa fa-bar-chart-o fa-2x'></i>
                        <span className='nav-text'>Graphs and Statistics</span>
                    </a>
                </li>
                <li>
                    <a href='www.google.com'>
                        <i className='fa fa-font fa-2x'></i>
                        <span className='nav-text'>Quotes</span>
                    </a>
                </li>
                <li>
                    <a href='www.google.com'>
                        <i className='fa fa-table fa-2x'></i>
                        <span className='nav-text'>Tables</span>
                    </a>
                </li>
                <li>
                    <a href='www.google.com'>
                        <i className='fa fa-map-marker fa-2x'></i>
                        <span className='nav-text'>Maps</span>
                    </a>
                </li>
                <li>
                    <a href='www.google.com'>
                        <i className='fa fa-info fa-2x'></i>
                        <span className='nav-text'>Documentation</span>
                    </a>
                </li>
            </ul>

            <ul className='logout'>
                <li>
                    <a onClick={logout} href='login'>
                        <i className='fa fa-power-off fa-2x'></i>
                        <span className='nav-text'>Logout</span>
                    </a>
                </li>
            </ul>
        </nav>
    </>)
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps, {
        logout
    }
)(Dashboard);

//export default Dashboard;
