import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';
import PropTypes from 'prop-types';
import './portal-login.style.scss';

const Register = ({ setAlert, register, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    };

    // Redirect if register is succesful
    if (isAuthenticated) {
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
                        <h1 className='title'>Register</h1>
                        <form className='form' onSubmit={onSubmit}>
                            <div className='input-container'>
                                <input
                                    name='name'
                                    value={name}
                                    type='text'
                                    required='required'
                                    onChange={e => onChange(e)}
                                />
                                <label>name</label>
                                <div className='bar'></div>
                            </div>
                            <div className='input-container'>
                                <input
                                    name='email'
                                    value={email}
                                    type='email'
                                    required='required'
                                    onChange={e => onChange(e)}
                                />
                                <label>email</label>
                                <div className='bar'></div>
                            </div>
                            <div className='input-container'>
                                <input
                                    type='password'
                                    required='required'
                                    name='password'
                                    value={password}
                                    onChange={e => onChange(e)}
                                />
                                <label>Password</label>
                                <div className='bar'></div>
                            </div>
                            <div className='input-container'>
                                <input
                                    type='password'
                                    value={password2}
                                    required='required'
                                    name='password2'
                                    onChange={e => onChange(e)}
                                />
                                <label>Confirm Password</label>
                                <div className='bar'></div>
                            </div>
                            <div className='button-container'>
                                <button>
                                    <span>Register</span>
                                </button>
                            </div>
                        </form>
                        <p align='center'>
                            Already have an account? <Link to='/'>Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
