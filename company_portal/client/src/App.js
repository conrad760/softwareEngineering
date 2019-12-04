import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmployeeSearch from './pages/employee-search.page';
import Portal from './pages/portal/portal-login.page';
import Dashboard from './pages/dashboard/dashboard.page';
import PrivateRoute from './components/routing/PrivateRoute';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './redux/actions/auth';
import setAuthToken from './util/setAuthToken';
import SuperAdmin from './pages/superadmin/superadmin.page';

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
                <Router>
                    <Route path='/global' component={EmployeeSearch} />
                    <Route path='/finance' component={EmployeeSearch} />
                    <Route path='/sales' component={EmployeeSearch} />
                    <Route path='/HR' component={EmployeeSearch} />
                    <Route path='/eng' component={EmployeeSearch} />
                    <Route path='/' component={Portal} />
                    <PrivateRoute
                        exact
                        path='/dashboard'
                        component={Dashboard}
                    />
                    <PrivateRoute
                        exact
                        path='/superadmin'
                        component={SuperAdmin}
                    />

                    <Route path='/cat-employees' component={EmployeeSearch} />
                </Router>
            </>
        </Provider>
    );
}

export default App;
