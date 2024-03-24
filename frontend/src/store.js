import { configureStore } from '@reduxjs/toolkit';
import { productDetailsReducer, productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

// load preloaded state from local storage

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : {};

const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetail: productDetailsReducer,
        cart: cartReducer,
        userLogin: userLoginReducer,
        userRegister: userRegisterReducer
    },
    preloadedState: {
        cart: { cartItems: cartItemsFromStorage },
        userLogin: { userInfo: userInfoFromStorage },
    }
});

export default store;