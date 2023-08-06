import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Rating, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const ProductCard = ({product}) => {
  const {_id,name, img, price, rating, category, status,description} = product;
  const router = useRouter();
  const handleDetailsPage = ()=> {
    router.push(`/${_id}`)
  }
  return (
    <Card onClick={handleDetailsPage} sx={{maxWidth: '390px', display: 'flex', m:2}}>
              <CardActionArea >
                <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center'
                      }}>
                <CardMedia
                  sx={{ minHeight: '200px',
                        maxWidth: '250px',
                      }}
                  component='img'
                  src={img}
                  alt='product' />
                </Box>
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                  {name}
                </Typography>
                <Typography variant='body2' >
                {(description).substr(0, 140)}
                </Typography>
                <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center',
                        mt:1
                      }}>
                <Box>
                <Typography sx={{
                 background: 'rgba(76, 175, 80, 0.4)',
                 textAlign: 'center',
                 borderRadius: '12px'
                }} 
                 variant='body2' gutterBottom component={'div'}>
                  {category}
                </Typography>
                <Stack spacing={1}>
                  <Rating name="half-rating-read" defaultValue={Number(rating)} precision={0.5} readOnly />
                </Stack>
                {/* <Button sx={{mt:1}} variant='contained' color='warning' size="small">Delete</Button> */}
                </Box>
                <Box>
                <Typography variant='body2' gutterBottom component={'div'}>
                  Price : {price}
                </Typography>
                <Typography variant='body2' gutterBottom component={'div'}>
                   {status? 
                   <Typography color='green'>
                   In Stock
                 </Typography>
                   : 
                   <Typography color='red'>
                   Out of Stock
                 </Typography>
                   }
                </Typography>
                {/* <Button sx={{mt:1}} variant='contained' color='primary' size="small" >Edit</Button> */}
                </Box>
              </Box>
              </CardContent>
              </CardActionArea>
    </Card>
  );
};

export default ProductCard;