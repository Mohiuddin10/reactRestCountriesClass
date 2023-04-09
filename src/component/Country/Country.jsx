import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area, region, population, name, startOfWeek} = props.country;
    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>start of Week: {startOfWeek}</p>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;