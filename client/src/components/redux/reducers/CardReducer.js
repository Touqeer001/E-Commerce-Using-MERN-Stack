import * as actionTypes from '../constants/cartConstant.js';

export const cartReducer = (state = { cartItems: []}, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const exist = state.cartItems.find(product=> product.id === item.id);
            
            if(exist){
                return {
                    ...state, cartItems: state.cartItems.map(data => data.product === exist.product ? item : data)
                }
            } else {
                return  { ...state, cartItems: [...state.cartItems, item]}
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter(product=> product.id !== action.payload)
            }
        default:
            return state;
    }
}