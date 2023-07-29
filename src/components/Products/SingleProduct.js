import {Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const SingleProduct = ({product}) => {
  const {name, img, price, rating, category} = product;

  return (
    <Card sx={{maxWidth: '390px', display: 'flex', m:2}} >
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
                Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              </CardActionArea>
    </Card>
  );
};

export default SingleProduct;