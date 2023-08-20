
import Navbaar from './Navbaar'
import Banner from './Banner';

import{Box,styled}  from '@mui/material'

const Components=styled(Box)`
padding:10px;
background: #9e9e9e;

`

const Home=()=>{
    return(
        <>
        <Navbaar/>
        < Components>
          <Banner/> 
          </ Components>
        
        
        </>



    )

}

export default Home;