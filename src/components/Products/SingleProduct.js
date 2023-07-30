import { Box, CardMedia, Container, Rating, Stack, Typography } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import SouthEastIcon from '@mui/icons-material/SouthEast';
const SingleProduct = ({product}) => {
  const {id,name, img, price, rating, category, status, features, description, reviews} = product;
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/42e89993546277.5ed6ae8979655.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "250px",
        }}
      >
        <Typography
          align="center"
          color={"black"}
          variant="h2"
          sx={{ fontWeight: 900, padding: 10 }}
        >
          {name}
        </Typography>
      </Box>
      <Container>
        <hr />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
            {/* <Typography
              m={4}
              align="center"
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              laudantium voluptates quaerat, excepturi soluta quos repudiandae
              consequuntur? 
            </Typography> */}
            <CardMedia
              component="img"
              height="400px"
              image={img}
              alt="green iguana"
            />
            <Typography align="center" variant="h4" mt={2}>
              {name}
            </Typography>
            <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center',
                        mx: 4,
                        mt:2
                      }}>
                <Box>
                <Typography variant='h6' gutterBottom component={'div'}>
                  Category: {category}
                </Typography>
                <Stack spacing={1}>
                  <Rating name="size-small" defaultValue={Number(rating)} precision={0.5} readOnly />
                </Stack>
                </Box>
                <Box>
                <Typography variant='h6' gutterBottom component={'div'}>
                  Price : {price}
                </Typography>
                <Typography variant='h6' gutterBottom component={'div'}>
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
                </Box>
              </Box>
              <Box sx={{mx: 4, mt:1}}>
                <Typography variant='h6' gutterBottom component={'div'}>
                  Features
                </Typography>
                  {
                    features.map((feature,index) => <Typography ml={1} key={index}><SouthEastIcon/>{feature}</Typography>)
                  }
              </Box>
            <Typography
              m={4}
              color={"gray"}
              variant="body1"
              sx={{ fontWeight: 900 }}
            >
              {description}
            </Typography>
            <Box sx={{mx: 4, mt:1}}>
                <Typography variant='h6' gutterBottom component={'div'}>
                  Reviews
                </Typography>
                  {
                    reviews.map((review,index) => <Typography ml={1} key={index}><SouthEastIcon mt={1}></SouthEastIcon>{review}</Typography>)
                  }
                </Box>
          </Box>

          <Box flex={1}>
           
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SingleProduct;