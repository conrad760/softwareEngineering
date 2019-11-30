import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EmployeeSearch from './pages/employee-search.page';




const App = () => {

    return (
        <Router>
            <Route path='/cat-employees' component={EmployeeSearch} />
        </Router>
    );
};

export default App;
