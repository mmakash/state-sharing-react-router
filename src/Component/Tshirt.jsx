/* eslint-disable react/prop-types */
import React from 'react';
import './style.css';

const Tshirt = ({tShirt,handleAddToCart}) => {
    const {picture,name,price} = tShirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;