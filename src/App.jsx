import { useEffect, useState } from 'react'
import './App.css'

function App() {
  

  return (
    <LoadCountries />
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
    </div>
  )
}


export default App
