import React, { Fragment, useState } from 'react';
//import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth'
import './portal-login.style.scss';

const Portal = ({ login, isAuthenticated, user }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    // Redirect if logged in
    if (isAuthenticated && user) {
        
        if(user.role === 'super_admin'){
            return <Redirect to='/superadmin' />;
        }
        return <Redirect to='/dashboard' />;
    }

    return (
        <Fragment>
            <div>
                <div className='pen-title'>
                    <h1>Company Portal</h1>
                </div>
                <div className='container'>
                    <div className='card'></div>
                    <div className='card'>
                        <h1 className='title'>Login</h1>
                        <form className='form' onSubmit={e => onSubmit(e)}>
                            <div className='input-container'>
                                <input
                                    name='email'
                                    type='email'
                                    id='#{label}'
                                    required='required'
                                    onChange={e => onChange(e)}
                                />
                                <label>email</label>
                                <div className='bar'></div>
                            </div>
                            <div className='input-container'>
                                <input
                                    type='password'
                                    id='#{label}'
                                    required='required'
                                    name='password'
                                    onChange={e => onChange(e)}
                                />
                                <label>Password</label>
                                <div className='bar'></div>
                            </div>
                            <div className='button-container'>
                                <button>
                                    <span>login</span>
                                </button>
                            </div>
                        </form>
                        <p align='center'>
                            Don't have an account? <Link to='/register'>Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect(
    mapStateToProps,
    { login }
)(Portal);
//export default Portal;
