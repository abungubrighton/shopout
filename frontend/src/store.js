import { configureStore } from '@reduxjs/toolkit';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers'

// load preloaded state from local storage

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetail: productDetailsReducer,
        cart: cartReducer,
    },
    preloadedState: {
        cart: { cartItems: cartItemsFromStorage },
    }
});

export default store;