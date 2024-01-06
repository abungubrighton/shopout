import { CART_ADD_ITEM } from "../constants/cartConstants"

export const addToCart = (id, qty) => async(dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: data
    })

    // save the item to local storage , so we can load initial state of cart in the store from local storage
    // local storage usually  persists data 
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}