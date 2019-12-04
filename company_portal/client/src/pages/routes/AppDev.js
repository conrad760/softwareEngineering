import React from 'react'
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AppDev = ({ auth: { user } }) => {
    if (user && user.role === 'sales_admin') {
        return <h1>SALES Link</h1>
    } else if (user && user.role === 'eng_admin') {
        return <h1>ENG Link</h1>
    } else if (user && user.role === 'fin_admin') {
        return <h1>FIN Link</h1>
    } else if (user && user.role === 'hr_admin') {
        return <h1>HR Link</h1>
    } else {
        return <Redirect to='/dashboard' />;
    }
}

AppDev.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, {
})(AppDev);