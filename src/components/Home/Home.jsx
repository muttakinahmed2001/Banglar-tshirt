import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const  tShirts = useLoaderData();
    // const [cart,setCart]=useState;
    const handlerAddToCart = ()=>{
        console.log('handler added')
    }
    return (
        <div className='home-container'>
             <div className='t-shirts-container'>{
                tShirts.map(tShirt =><TShirt
                key={tShirt._id}
                tShirt={tShirt}
                handlerAddToCart={handlerAddToCart}
                ></TShirt>)
            }</div>

            <div className='cart-container'>
<Cart></Cart>
            </div>
            
        </div>
    );
};

export default Home;