import React from 'react';
import './Country.css';
import { addtoLS } from '../utilities/db';

const Country = (props) => {
    const {area, region, population, name, startOfWeek, flags, cca3:id} = props.country;
    

// add to local storage 
const addToCart = (id) =>{
    addtoLS(id);
}

    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>start of Week: {startOfWeek}</p>
            <p>Region: {region}</p>
            <button onClick={() => addToCart(id)}>Add to travel list</button>
        </div>
    );
};

export default Country;