/* eslint-disable react/prop-types */
import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    console.log(cart);
    return (
        <div>
            <h2>Order summary{cart.length}</h2>
            {
                cart.map(tShirt => {
                    return (
                        <div key={tShirt._id}>
                            <p>{tShirt.name}</p>
                            <button onClick={() => handleRemoveFromCart(tShirt._id)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cart;