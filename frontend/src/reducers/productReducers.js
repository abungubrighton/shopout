import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from '../constants/productConstants';
export const productListReducer = (state = { products: [] }, action) => {
    /**
     * Responsible for changing(loading in ) the list of products in the STORE
     * its a slice that looks sth like this {loading:true, products:[],errors:[]}
     * we will call this SLICE  of STORE   productList
     */
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state;
    }
}