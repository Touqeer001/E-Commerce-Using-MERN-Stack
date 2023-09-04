import Carousel from 'react-multi-carousel';
import {Box,Typography,styled} from '@mui/material'

import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Component = styled(Box)`
    margin-top: 10px;
    background: #FFFFFF;
`;
const Image = styled('img')({
    width: 'auto',
    height: 150
})
const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`
const Title=styled('Typography')`
font-size: 22px;
font-style: italic;
font-family: 'revicons';
font-weight: 600;
color:blue;



`
const Slide=({products,title})=>{
    return(

        < Component>
        <Box>
            
            <Title>{title}</Title>
        </Box>
      <Carousel swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      centerMode={true}
      keyBoardControl={true}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
        
     
        {
          products.map(product=>(
                // <img src={products.url></img>
                <Box textAlign="center" style={{ padding: '25px 15px' }}>
                <Image src={product.url} alt="Url not found"></Image>
                <Text style={{ color:'Black' }}>{product.title.shortTitle}  </Text>
                <Text style={{color: 'red' }}>{product.discount}</Text>
             
       
           <Text style={{color: 'blue' }}>{product.tagline}</Text>
       
                       </Box>
            ))
        }
      </Carousel>
      </Component>

    )

}

export default Slide;