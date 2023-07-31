import { Box } from '@mui/material';
import React from 'react';
import ProductCard from '../Products/ProductCard';

const CategoryProducts = ({products}) => {
  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {
          products?.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
        }
    </Box>
  );
};

export default CategoryProducts;