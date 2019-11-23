import React from 'react';

import { Card } from '../card-list/card/card.component'

import './card-list.style.css';

export const CardList = props => (
    <div className='card_list'>
        {props.employees.map(employee => (
    <Card key={employee.id} employee={employee}/>
        ))}
    </div>
);
