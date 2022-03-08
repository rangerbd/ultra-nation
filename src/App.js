import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';

function App() {

  const [countries ,setCountries] = useState([])

  useEffect(() => {

    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
       })
    .catch(error => console.log(error))

  },[])
 



  return (
    <div className="App">

      <h1> total countries : {countries.length}</h1>

     
      <ul>

       {
         countries.map(country => <Country name={country.name} population={country.population}  capital={country.capital}flag={country.flags.png} key={country.alpha3Code}></Country>)
       }

      </ul>
    </div>
  );
}

export default App;
