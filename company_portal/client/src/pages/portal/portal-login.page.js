import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './portal-login.style.scss';

const Portal = () => {
    // useEffect(async() => {
    //     const result = await axios(
    //         '/api/users'
    //     )

    //     const data = result.data

    //     console.log(data);

    // }, []);

    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async e => {
        e.preventDefault();
        const body = JSON.stringify({ email, password });
        console.log(body);

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const postData = await axios.post('/api/auth', body, config);
            console.log(postData.data);
        } catch (err) {
            console.log(err);
        }
    };

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
                        <form onSubmit={handleSubmit}>
                            <div className='input-container'>
                                <input
                                    name='email'
                                    type='text'
                                    id='#{label}'
                                    required='required'
                                    onChange={e => setemail(e.target.value)}
                                />
                                <label for='#{label}'>email</label>
                                <div className='bar'></div>
                            </div>
                            <div className='input-container'>
                                <input
                                    type='password'
                                    id='#{label}'
                                    required='required'
                                    name='password'
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <label for='#{label}'>Password</label>
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

export default Portal;
