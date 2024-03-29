import { CART_REMOVE_ITEM, CART_ADD_ITEM } from '../constants/cartConstants';


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            /*before adding item into the cartItems array , check if the item already exists
            if it exists, just update it, else add it to the cartItems array
            x.product  refers to an items id
            */
            const item = action.payload;
            const existItem = state.cartItems.find(x => x._id === item._id);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x._id === existItem._id ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x._id !== action.payload)
            }
        default:
            return state
    }

};