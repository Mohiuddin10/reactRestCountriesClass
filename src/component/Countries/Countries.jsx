import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css";
import { RingLoader } from 'react-spinners';



const LoadCountries = () => {
    return (
        <div className="countries-container">
        {
            countries.map(country => <Country 
            country={country} 
            key={country.cca3}
            />)
        }
        </div>
    );
};


const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then( res => res.json())
        .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h1>Hello from countries: {countries.length}</h1>
            
            <div className="spinner">
            <RingLoader id='spinner' color="#c1def7" />
            </div>
            <button onClick={()=> LoadCountries()}>Load Countries</button>
            <LoadCountries />
        </div>
    );
};

export default Countries;