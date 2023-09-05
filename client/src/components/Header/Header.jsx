
import { useState } from 'react';
import {AppBar,Toolbar,styled,Box, IconButton, Drawer,List} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Menu } from '@mui/icons-material';


const StyledHeader=styled(AppBar)`
// background:#2874f0;
background:black;

height:50px;


`
const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.down('sm')]: {
        display: 'block',
        background: 'white',
        color:'black',
       // borderRadius: 'none',
        marginRight: '30px',
    }
}));



const Header=()=>{
    const [open, setOpen] = useState(false);
   
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }


    
    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );
    return(
        <StyledHeader  position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
            <MenuButton
                    color="inherit"
                     onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                     {list()}
                </Drawer>
                <Search/>
                <CustomButtonWrapper>

                <CustomButtons/>
                </CustomButtonWrapper>

            </Toolbar>
       
        </StyledHeader>
     
    )
}
export default Header;