import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmployeeSearch from './pages/employee-search.page';
import Portal from './pages/portal/portal-login.page';

function App() {
    return (
        <div>
            <Portal />
            <Router>
                <Route path='/global' component={EmployeeSearch} />
                <Route path='/finance' component={EmployeeSearch} />
                <Route path='/sales' component={EmployeeSearch} />
                <Route path='/HR' component={EmployeeSearch} />
                <Route path='/eng' component={EmployeeSearch} />
                <Route path='/cat-employees' component={EmployeeSearch} />
            </Router>
        </div>
    );
}

export default App;
