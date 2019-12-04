import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { Redirect } from 'react-router-dom';
import '../dashboard/dashboard.style.scss';

const SuperAdmin = ({
    auth: { user, loading },
    logout
}) => {
    var role = user && user.role
    console.log('role is', role);
    
    return role !== "super_admin" ? (
        <h1>************OOOops********</h1>
    ) : (
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