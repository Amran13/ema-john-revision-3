import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // console.log('cart item >> ',cart)
    let quantity = 0;
    let total = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
    }
    return (
        <div className='cart'>
            <h2>Order summery</h2>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : {total} </p>
        </div>
    );
};

export default Cart;