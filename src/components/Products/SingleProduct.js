import { Box, Button, CardMedia, Container, Rating, Stack, Typography } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import { useDeleteProductMutation } from '@/redux/api/apiSlice';
import { useRouter } from 'next/router';
const SingleProduct = ({product}) => {
  const router = useRouter();
  const [deleteProduct] = useDeleteProductMutation();
  const {_id,name, img, price, rating, category, status, features, description, reviews} = product;

  const deleteHandle = (id)=> {
    if(confirm('Are sure to delete?') === true){
      deleteProduct(id).then(data=> {
        if(data){ 
          router.push('/')
          alert('Delete Successful')
        }
      }).catch(err=> console.log(err))
    }
  }
  const editHandle = ()=> {
    router.push(`/edit/${_id}`)
  }
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(https://img.freepik.com/free-photo/keyboard-blank-cards-coffee-cup-office-supplies-desk_23-2148041993.jpg?w=1380&t=st=1690784462~exp=1690785062~hmac=f13a4b33b2b6c87e4618466e998b1ba5908227431220ffb83a3724948d4954ad)`,
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
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, sm: 2, md: 8 }}
          mt={8}
        >
          <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
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
                    features?.map((feature,index) => <Typography ml={1} key={index}><SouthEastIcon/>{feature}</Typography>)
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
                    reviews?.map((review,index) => <Typography ml={1} key={index}><SouthEastIcon mt={1}></SouthEastIcon>{review}</Typography>)
                  }
            </Box>
            <Box sx={{mx: 4, mt:1}}>
                    <Button onClick={()=> deleteHandle(_id)} sx={{mt:1}} variant='contained' color='warning' size="small">Delete</Button> 
                    <Button onClick={()=> editHandle(_id)} sx={{mt:1,ml:1}} variant='contained' color='primary' size="small" >Edit</Button>
            </Box>
          </Box>

          <Box flex={1}>
           <RelatedProducts category={category} id={_id}></RelatedProducts>
          </Box>
          
        </Stack>
      </Container>
    </Box>
  );
};

export default SingleProduct;