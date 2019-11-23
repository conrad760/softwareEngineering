import React, {Component} from 'react';

import { CardList } from '../components/card-list/card-list.component';
import '../App.css';
import { SearchBox } from '../components/search-box/search-box.component';

class EmployeeSearch extends Component {
    state = {
            employees: [],
            title: '',
            searchField: ''
        };
    // put this on the page
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ employees: users }));
    }

    onSearchChange = e =>
        this.setState({ title: e.target.value, searchField: e.target.value });

    render() {
        const { employees, searchField, title } = this.state;
        const filteredEmployees = employees.filter(employee =>
            employee.name.toLowerCase().includes(searchField.toLowerCase())
        );
        return (
            <div className='App'>
                <h1>{title}</h1>
                <SearchBox
                    placeholder='Search Monsters'
                    onSearchChange={this.onSearchChange}
                />
                <CardList employees={filteredEmployees} />
            </div>
        );
    }
}

export default EmployeeSearch;
