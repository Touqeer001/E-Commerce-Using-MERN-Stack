import {Box,Button,styled} from '@mui/material'


const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))


const Image = styled('img')({
 
    width: '95%'
});
const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: white;
    background:black;
`;



const ActionItem=({product})=>{
return(
<LeftContainer>
    <Box style={{   padding: '15px 20px', border: '1px solid #f0f0f0'}}>
    <Image src={product.url }></Image></Box>
    < StyledButton variant='contained'style={{marginRight: 10}}>Add to Cart</ StyledButton>
    < StyledButton  variant='contained'>Buy Now</ StyledButton>
</LeftContainer>

)


}
export default ActionItem;