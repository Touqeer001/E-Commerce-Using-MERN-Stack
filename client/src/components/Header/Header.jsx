import {AppBar,Toolbar,styled,Box} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader=styled(AppBar)`
// background:#2874f0;
background:black;

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
                <CustomButtons/>

            </Toolbar>
       
        </StyledHeader>
     
    )
}
export default Header;