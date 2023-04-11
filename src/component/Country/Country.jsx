import React from 'react';
import './Country.css';

const Country = (props) => {
    const {area, region, population, name, startOfWeek, flags} = props.country;
    console.log(key)

// add to local storage 
const addToCart = (id) =>{
    localStorage.setItem(id);
}

    return (
        <div className='country'>
            <h3>Country Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>start of Week: {startOfWeek}</p>
            <p>Region: {region}</p>
            <button onClick={() => addToCart(props.key)}>Add to travel list</button>
        </div>
    );
};

export default Country;