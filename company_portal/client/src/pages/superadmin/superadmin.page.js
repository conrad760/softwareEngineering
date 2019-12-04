import React, { useState, useEffect } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import '../dashboard/dashboard.style.scss';

const SuperAdmin = ({ auth: { user, loading }, logout }) => {
    const [targetUser, setTargetUser] = useState('');
    const [value, setValue] = useState('');
    const [userData, setUser] = useState([]);
    useEffect(async () => {
        try {
            const res = await axios.get('/api/users');
            setUser(res.data.filter(d => d.role != 'super_admin'));
        } catch (error) {
            console.log(error);
        }
    }, []);
    var role = user && user.role;
    console.log('role is', role);

    const handleChange = e => {
        setValue(e.target.value);
    };
    const handleSubmit = async e => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const body = JSON.stringify({ role: value });
        await axios.put(`/api/users/${targetUser}`, body, config);
    };
    return role !== 'super_admin' ? (
        <h1></h1>
    ) : (
        <>
            <div></div>
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
            <Container>
                <div align='center'>
                    <h2>Admin Panel</h2>
                    <form onSubmit={handleSubmit}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {' '}
                                {userData.map(u => (
                                    <tr>
                                        <td>{u.name}</td>
                                        <td>{u.email}</td>
                                        <td>{u.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </Table>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'spaces-between'
                            }}
                        >
                            <h2> Select Role of </h2>
                            <select
                                value={value}
                                onChange={handleChange}
                                className='browser-default'
                                name='role'
                                required
                            >
                                <option value=''>Select</option>
                                <option value='global_admin'> ADMIN</option>
                                <option value='fin_admin'> FIN ADMIN</option>
                                <option value='sales_admin'>SALES ADMIN</option>
                                <option value='hr_admin'>HR ADMIN</option>
                                <option value='eng_admin'>ENG ADMIN</option>
                            </select>

                            <h2> to be assigned to user of </h2>
                            <select
                                value={targetUser}
                                onChange={e => setTargetUser(e.target.value)}
                                className='browser-default'
                                name='role'
                                required
                            >
                                <option value=''>Select</option>
                                {userData.map(u => (
                                    <option value={u._id}>{u.email}</option>
                                ))}
                            </select>

                            <div className='input-field col s12'></div>

                            <Button
                                variant='secondary'
                                className='btn waves-effect waves-light'
                                type='submit'
                                name='action'
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    );
};

SuperAdmin.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    logout
})(SuperAdmin);
