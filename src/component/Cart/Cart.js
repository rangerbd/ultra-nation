import React from 'react';

const Cart = (props) => {
const cart=props.cart;
let totalpopulation = 0;

for (let i = 0; i < cart.length; i++) {
    const country = cart[i];
    totalpopulation =totalpopulation +country.population;
    
}

    return (
        <div>
            <h4>this is cart:{props.cart.length} </h4>
            <h1> total Polulation : {totalpopulation}</h1>
        </div>
    );
};

export default Cart;