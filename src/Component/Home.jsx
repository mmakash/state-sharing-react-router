import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from './Tshirt';
import Cart from './Cart';
import './style.css';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart,setCart] = useState([]);
    const handleAddToCart = (clothes) => {
        const newCart = [...cart,clothes];
        const exist = cart.find(tShirt => tShirt._id === clothes._id);
        if(!exist){
            setCart(newCart);
        }
        else{
            alert("Already added");
        }
    }
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(tShirt => tShirt._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className='tshirts-container'>
            {
                tShirts.map(tShirt => {
                    return (
                        <Tshirt handleAddToCart={handleAddToCart} tShirt={tShirt} key={tShirt._id}/>
                    )
                })
            }
            </div>
           <div>
               <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}/>
           </div>
        </div>
    );
};

export default Home;