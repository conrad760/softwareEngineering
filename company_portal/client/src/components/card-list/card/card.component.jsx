import React from 'react';

export const Card = props => (
    <div>
        <img src={ `https://robohash.org/${props.employee.id}?set=set4&size=180x180` } alt="employee"/>
        <h1> {props.employee.name}</h1>
       <h6> {props.employee.email}</h6> 
    </div>
);
