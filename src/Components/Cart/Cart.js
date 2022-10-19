import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    return (
        <div className='cart'>
            <h2>Order summery</h2>
            <p>Selected Items : {cart.length}</p>
            <p>Total Price : {total} </p>
        </div>
    );
};

export default Cart;