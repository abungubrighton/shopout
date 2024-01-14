import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants"
export const addToCart = (id, qty) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)
    let quantity = Number(qty);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {...data, qty: quantity }
    })

    // save the item to local storage , so we can load initial state of cart in the store from local storage
    // local storage usually  persists data 
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};

export const removeFromCart = (id) => async(dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id

    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
};