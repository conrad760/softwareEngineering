import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import NavItem from '../../components/nav-bar/nav-item/nav-item.component'
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import {
    GLOBAL_ADMIN,
    FINANCE_ADMIN,
    SALES_ADMIN,
    HR_ADMIN,
    ENG_ADMIN
} from '../../dummbie-links';

import './dashboard.style.scss';
import NavItem from '../../components/nav-bar/nav-item/nav-item.component';
import {
    get_GLOBAL_ADMIN,
    get_FINANCE_ADMIN,
    get_SALES_ADMIN,
    get_HR_ADMIN,
    get_ENG_ADMIN
} from '../../redux/actions/index';
// const Dashboard = () => {
//     const dispatch = useDispatch();
//     // const data = dispatch(get_ENG_ADMIN());
//     // // console.log(data);
//     // const roles = useSelector(state => state.roles);
//     // console.log(roles);
//     const [role, setRole] = useState([])
//     // useEffect(() => {

//     // })
//     const currentUser = useSelector(state => state.auth);
//     console.log(currentUser);

const Dashboard = ({ auth: { user }, logout }) => {
    const [role, setRole] = useState([]);
    useEffect(() => {
        if (user) {
            switch (user.role.toUpperCase()) {
                case 'GLOBAL_ADMIN':
                    setRole(GLOBAL_ADMIN);
                    break;
                case 'FINANCE_ADMIN':
                    setRole(FINANCE_ADMIN);
                    break;
                case 'SALES_ADMIN':
                    setRole(SALES_ADMIN);
                    break;
                case 'HR_ADMIN':
                    setRole(HR_ADMIN);
                    break;
                case 'ENG_ADMIN':
                    setRole(ENG_ADMIN);
                    break;
                default:
                    break;
            }
        }
    }, [user]);

    return (
        <>
            <div className='area'>
                <p>
                      Welcome {user && user.name} ,and
                    thank you for being here. Your role is {user && user.role}
                </p>
            </div>
            <nav className='main-menu'>
                <ul>
                    {role.map(r => (
                        <NavItem 
                            link={r.link}
                            linkName={r.linkName}
                            icon={r.icon}
                        />
                    ))}
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
    );
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
    logout
})(Dashboard);

// export default Dashboard;
