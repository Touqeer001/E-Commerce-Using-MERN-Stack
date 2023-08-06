import { InputBase,Box,styled} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer=styled(Box)`
background:#fff;
width:38%;
border-radius:4px;
margin: -17px 0px 0px -19px;
display:flex;

`


const Searchicons=styled(Box)`
margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;


`
const Search=()=>{
    return(
        <SearchContainer>
        <InputBase  placeholder='search for products....'
     
        
        
        />
        <Searchicons>
        <SearchIcon></SearchIcon>
        </Searchicons>
       

     
        </SearchContainer>
  
    )
}
 
export default Search;