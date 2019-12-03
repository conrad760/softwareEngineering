import React from 'react';
import './portal-login.style.scss';

const Portal = () => (
    <div>
        <div className='pen-title'>
            <h1>Company Portal</h1>
        </div>
        <div className='container'>
            <div className='card'></div>
            <div className='card'>
                <h1 className='title'>Login</h1>
                <form>
                    <div className='input-container'>
                        <input
                            type='#{type}'
                            id='#{label}'
                            required='required'
                        />
                        <label for='#{label}'>Username</label>
                        <div className='bar'></div>
                    </div>
                    <div className='input-container'>
                        <input
                            type='#{type}'
                            id='#{label}'
                            required='required'
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
);

export default Portal;
