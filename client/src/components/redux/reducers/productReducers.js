// this reducer function is designed to handle two specific action types: GET_PRODUCTS_SUCCESS and GET_PRODUCTS_FAIL. 
// When a GET_PRODUCTS_SUCCESS action is dispatched, it updates the state with the received product data. 
// When a GET_PRODUCTS_FAIL action is dispatched, it updates the state with an error message. 
// For any other action types, it returns the current state without making any changes. 
// This reducer is likely part of a larger Redux store that manages product-related state in a web application.

import * as actionTypes from '../constants/productConstant'

export const getProductReducer= (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};


export const getProductDetailsReducer = (state = {product:{}}, action) => {
    
    switch(action.type){
        case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }
        case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload }
        case actionTypes.GET_PRODUCT_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_PRODUCT_DETAILS_RESET: 
            return {
                product: {}
            }
        default:
            return state
    }
}