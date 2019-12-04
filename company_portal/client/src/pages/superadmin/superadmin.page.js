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
            <div align='center'>
                <h2>Admin Panel</h2>
                <form>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            user
                        </tbody>
                    </table>
                    <div>
                        <h2>Select Role To Assign: </h2>
                        <div className="input-field col s12">
                            <select className='browser-default' name="role" required>
                                <option value="" disabled selected>CHOOSE ROLE</option>
                                <option value="ADMIN"> ADMIN</option>
                                <option value="FINANCE_ADMIN"> FINANCE ADMIN</option>
                                <option value="SALES_ADMIN">SALES ADMIN</option>
                                <option value="HR_ADMIN">HR ADMIN</option>
                                <option value="ENG_ADMIN">ENG ADMIN</option>
                            </select>
                        </div>
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
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