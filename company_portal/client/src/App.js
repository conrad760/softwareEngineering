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
import UserPage from './pages/userpage.page';

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
                    <Route path='/' component={Portal} />
                    <PrivateRoute path='/dashboard/:id' component={Dashboard} />
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
