import styled from '@emotion/styled';
import {Box, Button, Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Wrapper=styled(Box)`

display:flex;
margin:0 150px 0 ;
&>button,&>div{
    margin-right:40px;
    font-size:14px;
}
`

const StyleCart=styled(Box)`
display:flex;

`
const LoginButtons=styled(Button)`
color: black;
background: white;
padding: 5px 40px;
border-radius: 6px;
height: 32px;
text-transform: none;
box-shadow: none;
font-weight: 600;


`





const CustomButton=()=>{
    return(
< Wrapper>
    <LoginButtons variant="contained">
        login
    </LoginButtons>
    <Typography style={{marginTop:3, width:135}}>Become a Seller</Typography>
    <Typography  style={{marginTop:3}}>More</Typography>
<StyleCart>
    <ShoppingCartIcon></ShoppingCartIcon>
    <Typography>Cart</Typography>
</StyleCart>


</ Wrapper>
    )
}

export default CustomButton;