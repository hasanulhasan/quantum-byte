import {Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductCard = ({product}) => {
  const {id,name, img, price, rating, category, status} = product;
  const router = useRouter();
  const handleDetailsPage = ()=> {
    router.push(`/${id}`)
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellendus necessitatibus perferendis iste eveniet vel illum ea atque non aspernatur veniam.
                </Typography>
                <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center',
                        mt: 1
                      }}>
                <Typography variant='body2' gutterBottom component={'div'}>
                  Category: {category}
                </Typography>
                <Typography variant='body2' gutterBottom component={'div'}>
                  Price : {price}
                </Typography>
                <Typography variant='body2' gutterBottom component={'div'}>
                  Rating : {rating}
                </Typography>
                <Typography variant='body2' gutterBottom component={'div'}>
                   {status? 'In Stock': 'Out of Stock'}
                </Typography>
                </Box>
              </CardContent>
              </CardActionArea>
    </Card>
  );
};

export default ProductCard;