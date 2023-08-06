import {AppBar,Toolbar,styled,Box} from '@mui/material';
import Search from './Search';
import CustomButton from './CustomButton';

const StyledHeader=styled(AppBar)`
background:#2874f0;
height:50px;




`



const Header=()=>{

    return(
        <StyledHeader>
            <Toolbar>
                <Box>
                    {/* <img src="" alt="Image Not Found"></img> */}

                </Box>
                <Search/>
                <CustomButton/>

            </Toolbar>
       
        </StyledHeader>
     
    )
}
export default Header;