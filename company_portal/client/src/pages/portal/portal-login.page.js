import React, { Fragment, useState } from 'react';
//import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../redux/actions/auth'
import './portal-login.style.scss';

const Portal = ({ login, isAuthenticated }) => {
    // useEffect(async() => {
    //     const result = await axios(
    //         '/api/users'
    //     )

    //     const data = result.data

    //     console.log(data);

    // }, []);
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
    if (isAuthenticated) {
        return <Redirect to='/dashboard' />;
    }

    // const [email, setemail] = useState('');
    // const [password, setPassword] = useState('');
    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const body = JSON.stringify({ email, password });
    //     console.log(body);

    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     };
    //     try {
    //         const postData = await axios.post('/api/auth', body, config);
    //         console.log(postData.data);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

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
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { login }
)(Portal);
//export default Portal;
