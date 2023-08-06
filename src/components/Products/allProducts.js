import { Box } from '@mui/material';
import ProductCard from './ProductCard';

const AllProducts = ({products}) => {
  
  return (
    <div>
      <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {
          products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
      </Box>
    </div>
  );
};

export default AllProducts;
