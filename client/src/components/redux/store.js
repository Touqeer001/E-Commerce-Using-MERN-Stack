
// Redux is an open-source JavaScript library used primarily for managing the state of a web application. It is often employed in conjunction with React, though it can be used with other JavaScript frameworks or libraries as well. Redux follows the principles of a predictable state container and is frequently used in complex applications to maintain a centralized and predictable state management system.


import {getProductDetailsReducer, getProductReducer} from './reducers/productReducers.js'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import{composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { cartReducer } from './reducers/CardReducer.js';

const reducer=combineReducers({
    cart: cartReducer,
    getProducts:getProductReducer,
    getProductDetails:getProductDetailsReducer

})



const middleware = [thunk];


const store=createStore(
    reducer,

    composeWithDevTools(applyMiddleware(...middleware))
    

);
export default store;