import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { Redirect } from 'react-router-dom';
import '../dashboard/dashboard.style.scss';

const SuperAdmin = ({
    auth: { user },
    logout
}) => {
    if(!loading) {
        
    }
    
    return (
        <>
            <div>
                <p>***********************HERE you are SuperAdmin! { user && user.role }</p>
            </div>
            <nav className='main-menu'>
                <ul>
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
        </>
    )
};

SuperAdmin.propTypes = {
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
)(SuperAdmin);