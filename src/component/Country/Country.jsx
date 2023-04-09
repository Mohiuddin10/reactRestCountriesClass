import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area, region, population, name, startOfWeek} = props.country;
    return (
        <div className='country'>
            <h3>Country Name: {props.name}</h3>
            <p>Population: {props.population}</p>
            <p>Area: {props.area}</p>
            <p>start of Week: {props.startOfWeek}</p>
        </div>
    );
};

export default Country;