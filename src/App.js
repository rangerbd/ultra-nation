import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Cart from './component/Cart/Cart';

function App() {

  const [countries ,setCountries] = useState([]);
  const [cart ,setCart] =useState([]);

  useEffect(() => {

    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data);
       })
    .catch(error => console.log(error))

  },[])
 
const hancleCountry = (country) => {
  

  const newcart =[...cart , country]
  setCart(newcart)
}



  return (
    <div className="App">

      <h1> total countries : {countries.length}</h1>
      <h2> country added: {cart.length}</h2>

      <Cart cart={cart}></Cart>
      <ul>

       {
         countries.map(country => <Country country={country} handleCountry={hancleCountry} key={country.alpha3Code}></Country>)
       }

      </ul>
    </div>
  );
}

export default App;
