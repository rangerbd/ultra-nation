import React from 'react';

const Country = (props) => {
    
    const countryStyle={border: '1px solid grey' ,margin: '10px' , padding: '10px'}
    return (
        <div style={countryStyle}>
            <h4> this is : {props.name}</h4>
            <h5>population : {props.population}</h5>
            <h6>capital : {props.capital}</h6>
            <img src={props.flag}></img>
        </div>
    );
};

export default Country;