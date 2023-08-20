// import React,{ useState,useContext } from 'react';




// import styled from '@emotion/styled';
// import {Box, Button, Typography} from '@mui/material'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// //Components
// import Login from '../login/Login.jsx'

// import { DataContext } from '../../Context/DataProvider.jsx';




// const Wrapper=styled(Box)`

// display:flex;
// margin:0 150px 0 ;


// &>button,&>div{
//     margin-right:40px;
//     font-size:14px;
//     alighn
// }
// `

// const StyleCart=styled(Box)`
// display:flex;


// `
// const LoginButtons=styled(Button)`
// color: black;
// background: white;
// padding: 5px 40px;
// border-radius: 6px;
// height: 32px;
// text-transform: none;
// box-shadow: none;
// font-weight: 600;
// margin-bottom: 11px;


// `






// // const CustomButton=()=>{
// //     const[open,setOpen]=useState(false);
// //      const[account,setAccount]=useContext(DataContext);
// //     const openDialoge=()=>{
// //         setOpen(true);
// //     }
// //     return(
// // < Wrapper>
// // {/* 
// // {
    
// //     account ?<Typography>account={account} setAccount={setAccount}</Typography>: <LoginButtons variant="contained" onClick={()=>openDialoge()}> */}
// //     { account ?<Typography></Typography>: <LoginButtons variant="contained" onClick={()=>openDialoge()}>
// //     login
// // </LoginButtons>
// // }
   
// //     <Typography style={{marginTop:0, width:135}}>Become a Seller</Typography>
// //     <Typography  style={{marginTop:0,paddingRight: 20}}>More</Typography>
// // <StyleCart>
// //     <ShoppingCartIcon></ShoppingCartIcon>
// //     <Typography>Cart</Typography>
// // </StyleCart>
// // <Login open={open} setOpen={setOpen}/>


// // </ Wrapper>
// //     )
// // }


// const CustomButton = () => {
    
//     const [open, setOpen] = useState(false);
//          const[account,setAccount]=useContext(DataContext);

//     // const cartDetails = useSelector(state => state.cart);
//     // const { cartItems } = cartDetails;

//     const openDialog = () => {
//         setOpen(true);
//     }

//     return (
//         <Wrapper>
//             {
//                 // account ? <Profile account={account} setAccount={setAccount} /> :
//                     <LoginButtons variant="contained" onClick={() => openDialog()}>Login</LoginButtons>
                
//             }
//             <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
//             <Typography style={{ marginTop: 3 }}>More</Typography>
//             <StyleCart>
//            <ShoppingCartIcon></ShoppingCartIcon>
//         <Typography>Cart</Typography>
//        </StyleCart>
            
           
//             <Login open={open} setOpen={setOpen} setAccount={setAccount} />
            
//         </Wrapper>
//     )
// }

// export default CustomButton;



// import React,{ useState,useContext } from 'react';
import React, { useState, useContext } from 'react';

import { Box, Typography, Badge, Button, styled } from '@mui/material';
// import { ShoppingCart } from '@mui/icons-material';

// import { Link } from 'react-router-dom';
import { DataContext } from '../../Context/DataProvider';
// import { useSelector } from 'react-redux';

import Profile from './Profile';
// import LoginDialog from '../login/Login';

// const Container = styled(Link)(({ theme }) => ({
//     display: 'flex',
//     [theme.breakpoints.down('sm')]: {
//         display: 'block'
//     }
// }));

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 2,
    padding: '5px 40px',
    height: 32,
    boxShadow: 'none',
    [theme.breakpoints.down('sm')]: {
        background: '#2874f0',
        color: '#FFFFFF'
    }
}));


const CustomButtons = () => {
    
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);

    // const cartDetails = useSelector(state => state.cart);
    // const { cartItems } = cartDetails;

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
                
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            
            {/* <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container> */}
            <DataContext open={open} setOpen={setOpen} setAccount={setAccount} />
        </Wrapper>
    )
}

export default CustomButtons;