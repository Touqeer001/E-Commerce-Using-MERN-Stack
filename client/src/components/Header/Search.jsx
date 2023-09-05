import { InputBase,Box,styled,List, ListItem} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getProducts} from '../redux/action/productAction';
import { Link } from 'react-router-dom';



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

const InputSearchBase=styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;


`
const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;
const Search=()=>{

  const [ text, setText ] = useState();
  const [ open, setOpen ] = useState(true)
  const   { products }= useSelector(state => state.getProducts);
  // const { products } = getProducts;

  
  const getText = (text) => {
    setText(text);
    setOpen(false)
}
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getProducts())
}, [dispatch])


    return(
        <SearchContainer>
        <InputSearchBase placeholder='search for products....'
        onChange={(e) => getText(e.target.value)}

        />
        <Searchicons>
        <SearchIcon></SearchIcon>
        </Searchicons>
        
             {
               text && <ListWrapper>
                   {
                      products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                        <ListItem> 
                           <Link to={`/product/${product.id}`} onClick={() => setText('')} style={{ textDecoration:'none', color:'inherit'}} >
                                  {product.title.longTitle}
                                 
                                  
                                  </Link>

                        </ListItem>
                      ))
                   }
          
               </ListWrapper>


             }
     
        </SearchContainer>
  
    )
}
 
export default Search;