import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmployeeSearch from './pages/employee-search.page';
import Portal from './pages/portal/portal-login.page'



function App() {

    return (
        <div className="">
            < Portal />

        <Router>
            <Route path='/cat-employees' component={EmployeeSearch} />
        </Router>
        </div>
    );
};

export default App;
