import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const AllProducts = ({products}) => {
  
  return (
    <div>
      <Typography variant="h3" my={4} sx={{textAlign: 'center'}}>Latest Products</Typography>
      <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {
          products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
      </Box>
    </div>
  );
};

export default AllProducts;
