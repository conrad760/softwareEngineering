import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeSearch from './pages/employee-search.page';
import Alert from './components/layout/Alert';
import Portal from './pages/portal/portal-login.page';
import Register from './pages/portal/portal-register.page';
import Dashboard from './pages/dashboard/dashboard.page';
import PrivateRoute from './components/routing/PrivateRoute';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './redux/actions/auth';
import setAuthToken from './util/setAuthToken';
import SuperAdmin from './pages/superadmin/superadmin.page';
//import UserPage from './pages/userpage.page';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

    return (
        <Provider store={store}>
            <>
            <Alert/>
                <Router>
                    <Route exact path='/' component={Portal} />
                    <Route exact path='/register' component={Register} />
                    <PrivateRoute
                        exact
                        path='/superadmin'
                        component={SuperAdmin}
                    />
                    <PrivateRoute
                        exact
                        path='/dashboard'
                        component={Dashboard}
                    />
                    <Route path='/cat-employees' component={EmployeeSearch} />
                </Router>
            </>
        </Provider>
    );
}

export default App;
