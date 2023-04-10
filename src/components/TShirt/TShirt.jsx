import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt,handlerAddToCart}) => {
    const {_id,picture}=tShirt;
    console.log(tShirt)
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{tShirt.name}</h4>
             <p>Price: ${tShirt.price}</p>
             <button onClick={handlerAddToCart}>Buy now</button>
        </div>
    );
};

export default TShirt;