import React from 'react';
import './Country.css';
import { addToLS, removeCountry } from '../utilities/dbTest';
// import { addtoLS, removeCountryCart} from '../utilities/db';

const Country = (props) => {
    const {area, region, population, name, startOfWeek, flags, cca3:id} = props.country;
    

// add to local storage 
// const addToCart = (id) =>{
//     addtoLS(id);
// }
// const removeCountryLS = (id) =>{
//     removeCountryCart(id);
// };

const addToCart = id => {
    addToLS(id);
};
const remCart = id => {
    removeCountry(id);
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
            <button onClick={() => remCart(id)}>Remove country</button>
        </div>
    );
};

export default Country;