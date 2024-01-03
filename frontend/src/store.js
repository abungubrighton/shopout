import { configureStore } from '@reduxjs/toolkit';
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
const store = configureStore({
    reducer: {
        productList: productListReducer,
        productDetail: productDetailsReducer,
    },
});


export default store;