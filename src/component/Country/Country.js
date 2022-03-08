import React from 'react';

const Country = (props) => {
    const {name,population,capital,flags} =props.country;
    const handleCountry=props.handleCountry;
    const countryStyle={border: '1px solid grey' ,margin: '10px' , padding: '10px'}
    return (
        <div style={countryStyle}>
            <h4> this is : {name}</h4>
            <h5>population : {population}</h5>
            <h6>capital : {capital}</h6>
            <img src={flags.png}></img>
            <br/>
            <button onClick={ ()=>handleCountry(props.country)}>country added</button>
        </div>
    );
};

export default Country;