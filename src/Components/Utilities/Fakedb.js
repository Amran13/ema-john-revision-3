
let shoppingCart = {};

const addTodb = id => {
    const exist = localStorage.getItem('shopping-cart');
    if(exist){
        shoppingCart = JSON.parse(exist);
        if(shoppingCart[id]){
            shoppingCart[id] = shoppingCart[id] + 1;
        }
        else{
            shoppingCart[id] = 1;
        }
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
}

const getStoredCart = () => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeDb = id => {
    const exist = localStorage.getItem('shopping-cart');
    if(exist){
        shoppingCart = JSON.parse(exist);
        delete shoppingCart[id]
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
}

export {addTodb, getStoredCart, removeDb}