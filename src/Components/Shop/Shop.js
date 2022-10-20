import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addTodb, getStoredCart, removeDb } from '../Utilities/Fakedb';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(()=> {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                addedProduct.quantity = storedCart[id];
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])

    const handleAddToCart = (selectedProduct) => {
        // console.log('selected product >> ', selectedProduct)
        const exist = cart.find(product => product.id === selectedProduct.id);
        let newCart = [];
        if(!exist){
            //new to cart
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            //cart e age theke exist kore
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart);
        addTodb(selectedProduct.id)
    }

    const removeBtn = (product) => {
        removeDb(product.id);
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} handleAddToCart={handleAddToCart} removeBtn={removeBtn} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;