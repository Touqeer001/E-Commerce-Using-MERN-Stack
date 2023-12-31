import {Box,Typography,styled} from '@mui/material';

import {navData} from '../../components/AllData/data'

// const Components=styled(Box)`
// display:flex;
// margin:55px 130px 0 130px;
// justify-content: space-between;
// font-family: monospace;
// `
const Components = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}))
const Text=styled(Typography)`
font-size:14px;
font-weight:600;
color:white;


`
const Container=styled(Box)`

padding:12px 8px;
text-align:center;

`



const Navbaar=()=>{
    return(
< Components>
   {
     navData.map(data=>(
        <Container>
            <img src={data.url} alt="nav" style={{width:64}}></img>
            <Text>{data.text}</Text>

        </Container>

     ))
   }


</ Components>


    )

}

export default Navbaar;