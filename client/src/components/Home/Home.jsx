
import Navbaar from './Navbaar'
import Banner from './Banner';

import{Box,styled}  from '@mui/material'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getProducts} from '../redux/action/productAction.js';
import Slide from "./Slide.jsx";


const Components=styled(Box)`
padding:10px;
// background: #9e9e9e;
background: currentColor;


`

const Home=()=>{
  const {products}=useSelector(state=>state.getProducts) //this getProduct come from redux.this one come from the product reducercomponent
  // const {products}=getProducts; //object de structuring concept
 
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getProducts());

  },[dispatch])


    return(
        <>
        <Navbaar/>
        < Components>
          <Banner/> 
            <Slide products={products}  title="Deal of the day"/>
            <Slide products={products}  title="Discount for You"/>
            <Slide products={products}  title="Suggesting item"/>
            <Slide products={products}  title="Top Slection"/>
            <Slide products={products}   title="Recommended Item"/>

           <Slide products={products}  title="Trending Offers"/>
            <Slide products={products}  title="Season's top picks"/>
            <Slide products={products}  title="Top Deals on Acccessories"/>
       
            
          </ Components>
        
        
        </>



    )

}

export default Home;