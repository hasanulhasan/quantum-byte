import { Box, Button, CardMedia, Container, Rating, Stack, Typography } from '@mui/material';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import { useDeleteProductMutation } from '@/redux/api/apiSlice';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { auth } from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import numberWithCommas from '@/utils/thousandSeparate';

const SingleProduct = ({product}) => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [deleteProduct] = useDeleteProductMutation();
  const {_id,name, img, price, rating, category, status, features, description, reviews} = product;

  const deleteHandle = (id)=> {
    if(confirm('Are sure to delete?') === true){
      deleteProduct(id).then(data=> {
        if(data){ 
          toast.success('Product Deleted')
          setTimeout(() => {
            router.push('/')
          }, 800);
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
          sx={{ fontWeight: 900, py: 10 }}
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
          <Box>
          <Box sx={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center'
                      }}>
                <CardMedia
                  sx={{ 
                     minHeight: '500px',
                     maxWidth: '550px',
                      }}
                  component='img'
                  src={img}
                  alt='product' />
                </Box>
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
                <Typography sx={{
                 background: 'rgba(76, 175, 80, 0.4)',
                 textAlign: 'center',
                 borderRadius: '12px'
                }} 
                 variant='h6' gutterBottom component={'div'}>
                  {category}
                </Typography>
                <Stack spacing={1}>
                  <Rating name="size-small" defaultValue={Number(rating)} precision={0.5} readOnly />
                </Stack>
                </Box>
                <Box>
                <Typography variant='h6' gutterBottom component={'div'}>
                  Price : {numberWithCommas(price)}&#2547; 
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
              sx={{ fontWeight: 900 , textAlign: 'justify'}}
            >
              Description: {description}
            </Typography>
            <Box sx={{mx: 4, mt:1}}>
                {
                  reviews.length !== 0  && <Typography variant='h6' gutterBottom component={'div'}>
                  Reviews
                </Typography>
                }
                  {
                    reviews?.map((review,index) => <Typography ml={1} key={index}><SouthEastIcon mt={1}></SouthEastIcon>{review}</Typography>)
                  }
            </Box>
            {
              user?.email && 
              <Box sx={{mx: 4, mt:1}}>
              <Button onClick={()=> deleteHandle(_id)} sx={{mt:1}} variant='contained' color='warning'>Delete</Button> 
              <Button onClick={()=> editHandle(_id)} sx={{mt:1,ml:1}} variant='contained' color='primary'>Edit</Button>
              </Box>
            }
          </Box>

          <Box flex={1}>
           <RelatedProducts category={category} id={_id}></RelatedProducts>
          </Box>
          
        </Stack>
      </Container>
      <Toaster position="top-right"/>
    </Box>
  );
};

export default SingleProduct;