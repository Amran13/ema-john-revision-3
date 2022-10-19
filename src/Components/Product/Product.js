import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, category, seller, img, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
            <h3> {name} </h3>
            <p>{category}</p>
            <p>{seller}</p>
            <p>${price}</p>
            <button onClick={()=> props.handleAddToCart(props.product)}>add to cart</button>
            <button onClick={()=> props.removeBtn(props.product)}>Remove</button>
            </div>
        </div>
    );
};

export default Product;