
import axios from 'axios';
import*as actionTypes from '../constants/productConstant.js'
//this is url
const URL="http://localhost:8000";

export const getProducts=()=>async(dispatch)=>{

    try{
        const {data}= await axios.get(`${URL}/products`)
    // console.log(response);
    dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS ,payload:data});

    }
    catch(error){
//    console.log("Error  While calling getProducts Api",error.message);
dispatch({type:actionTypes.GET_PRODUCTS_FAIL, payload: error.message})
    }
   
}
export const getProductDetails = (id) =>async(dispatch) => {
    try {
     
        const {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response});

    }
};
