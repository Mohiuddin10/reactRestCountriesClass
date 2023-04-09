import { useEffect, useState } from 'react'
import './App.css'
import Countries from './component/Countries/Countries';

function App() {
  

  return (
    
    <Countries/>
  )
}

function LoadCountries () {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, []);
  return (
    <div className="countries">
      <h1>Traveling around the world</h1>
    <p>Available Countries: {countries.length}</p>
    {
      countries.map(country => <Country name={country}></Country>)
    }
    </div>
  )
}


// function for show countries 
function Country (props) {
  const {name} = props.name;
  return (
    <div className="">
      <h4>Country name: {name.common}</h4>
      <p>Population: {props.name.population}</p>
    </div>
  )
}


export default App
